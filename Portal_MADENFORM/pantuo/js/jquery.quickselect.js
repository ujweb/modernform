/*
快速完成下拉式選單 edited by JIA at Dec. 2015
*/

(function($) {

  var defaults = {
    judge: 'all',
    show: 6,
		errorText: 'No results found',
  };

  $.fn.quickselect = function (options) {
    var settings = $.extend({}, defaults, options);
    $(this).each(function(i,ev) {
      var $ev = $(ev),
					_formName = $ev.attr('name'),
					_initOption = $('option:selected',$ev).text();
			if (_initOption == null) {
				$ev.after('<div class="quick-select-body"><input type="text" name="'+_formName+'" class="quick-select-input" autocomplete="off"><i class="quick-select-arrow"></i></div>');
			} else {
				$ev.after('<div class="quick-select-body"><input type="text" name="'+_formName+'" value="'+_initOption+'" class="quick-select-input" autocomplete="off"><i class="quick-select-arrow"></i></div>');
			}
			var $target = $('~ .quick-select-body',$ev);
			$target.append('<ul class="quick-select-list"></ul>');
			var $list = $('ul.quick-select-list',$target);
			$('option',$ev).each(function(i,eve) {
				var _text = $(eve).text();
				if ($(eve).is(':selected') == true) {
					$list.append('<li data-value="'+_text+'" class="selected">'+_text+'</li>');
				} else {
					$list.append('<li data-value="'+_text+'">'+_text+'</li>');
				}
			});
			$list.append('<li class="nodata nofix">'+settings.errorText+'</li>');
			$(ev).attr('name','quick-select-temp-novalid').css({'display':'none'});

			// count list height and scroll to select one
			if (settings.show >= $('li',$list).length-1) {
				var _listHeight = $('li',$list).outerHeight() * settings.show;
				$list.css({'max-height':_listHeight,'overflow-y':'hidden'});
			} else {
				var _listHeight = $('li',$list).outerHeight() * settings.show;
				$list.css({'max-height':_listHeight});
			}
			var _scrollTop = $('li',$list).outerHeight() * $('li.selected',$list).index();
			$list.scrollTop(_scrollTop);

			// show & hide list
			$target.click(function(event) {
				if ($target.hasClass('open') == true) {
					if ($('i.quick-select-arrow',$target).is(event.target) || $('i.quick-select-arrow',$target).has(event.target).length > 0) {
						$target.removeClass('open');
						$list.stop().slideUp(150);
						if ($('li.fix',$list).length > 0) {
							var _inputText = $('li.fix:first',$list).data('value');
							$('li',$list).removeClass('selected');
							$('li.fix:first',$list).addClass('selected');
						} else {
							var _inputText = $('li.selected',$list).data('value');
						}
						$('li:not(.nodata)',$list).removeClass('fix').removeClass('nofix');
						$('li.nodata',$list).addClass('nofix');
						$('input.quick-select-input',$target).attr('placeholder','').val(_inputText);
					}
				} else {
					$target.addClass('open');
					$list.stop().slideDown(150, function() {
						var _scrollTop = $('li',$list).outerHeight() * $('li.selected',$list).index();
						$list.scrollTop(_scrollTop);
					});
					var _inputText = $('li.selected',$list).data('value');
					$('input.quick-select-input',$target).attr('placeholder',_inputText).val('');
				}
				// select item
				if (($('li:not(.nodata)',$list).is(event.target) || $('li:not(.nodata)',$list).has(event.target).length > 0) && ($target.hasClass('open') == true)) {
					var _value = $(event.target).data('value');
					$('li',$list).removeClass('selected');
					$(event.target).addClass('selected');
					$('input.quick-select-input',$target).attr('placeholder','').val(_value);
					$target.removeClass('open');
					$list.stop().slideUp(150, function() {
						$('li:not(.nodata)',$list).removeClass('fix').removeClass('nofix');
						$('li.nodata',$list).addClass('nofix');
					});
				}
			});
			$(document).mousedown(function(event) {
				if (!$target.is(event.target) && $target.has(event.target).length === 0) {
					$target.removeClass('open');
					$list.stop().slideUp(150, function() {
						$('li:not(.nodata)',$list).removeClass('fix').removeClass('nofix');
						$('li.nodata',$list).addClass('nofix');
					});
					if ($('li.fix',$list).length > 0) {
						var _inputText = $('li.fix:first',$list).data('value');
						$('li',$list).removeClass('selected');
						$('li.fix:first',$list).addClass('selected');
					} else {
						var _inputText = $('li.selected',$list).data('value');
					}
					$('input.quick-select-input',$target).attr('placeholder','').val(_inputText);
				}
			});

			// auto complete
			var bind_name = 'input keyup keypress';
			if (window.navigator.userAgent.indexOf("MSIE") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
				bind_name = 'keyup keypress';
			}
			$('input.quick-select-input',$target).on(bind_name, function(event) {
				$target.addClass('open');
				$list.css({'display':'block'});
				var _tempVal = $(this).val().toLowerCase();
				if (_tempVal == "") {
					$('li',$list).removeClass('nofix');
				} else {
					if (settings.judge == "all") {
						$('li',$list).each(function(i,evel) {
							if ($(evel).hasClass('nodata') == false) {
								var _judgeVal = $(evel).data('value').toLowerCase();
								if (_judgeVal.match(_tempVal) == null) {
									$(evel).removeClass('fix').addClass('nofix');
								} else {
									$(evel).removeClass('nofix').addClass('fix');
								}
							}
						});
					} else if (settings.judge == "head") {
						$('li',$list).each(function(i,evel) {
							if ($(evel).hasClass('nodata') == false) {
								var _judgeVal = $(evel).data('value').toLowerCase();
								if (_judgeVal.indexOf(_tempVal) != 0) {
									$(evel).removeClass('fix').addClass('nofix');
								} else {
									$(evel).removeClass('nofix').addClass('fix');
								}
							}
						});
					}
					if ($('li.fix',$list).length == 0) {
						$('li.nodata',$list).removeClass('nofix');
					} else {
						$('li.nodata',$list).addClass('nofix');
					}
				}
				var _code = event.keyCode || event.which;
				if ((_code == 13) || (_code == 32)) {
					event.preventDefault();
					return false;
				}
				$(this).on('keyup', function(event2) {
					var _keycode = event2.keyCode || event2.which;
					if ((_keycode == 13) || (_keycode == 32)) {
						event2.preventDefault();
						$target.removeClass('open');
						$list.css({'display':'none'});
						if ($('li.fix',$list).length > 0) {
							var _inputText = $('li.fix:first',$list).data('value');
							$('li',$list).removeClass('selected');
							$('li.fix:first',$list).addClass('selected');
						} else {
							var _inputText = $('li.selected',$list).data('value');
						}
						$('li:not(.nodata)',$list).removeClass('fix').removeClass('nofix');
						$('li.nodata',$list).addClass('nofix');
						$('input.quick-select-input',$target).attr('placeholder','').val(_inputText);
						return false;
					}
				});
			});

    });
  };
})(jQuery);