function slider() {
    'use strict';

    var sliderInstance = {
        instance: '',
        cs: 0,
        pause: 6000,
        duration: 750
    };

    this['init'] = function (data) {
        sliderInstance['instance'] = '#' + data['unique'];
		
        jQuery('#fws-style-' + data['unique'])['children']()['children']('appendTo');
        jQuery('#fws-style-' + data['unique'])['remove']();
		
        sliderInstance['pause'] = parseInt(data['pause'], 10);
        sliderInstance['duration'] = parseInt(data['duration'], 10);
        sliderInstance['hoverpause'] = parseInt(data['hoverpause'], 10);
        sliderInstance['bullets'] = parseInt(data['bullets'], 10);
        sliderInstance['arrows'] = parseInt(data['arrows'], 10);

        textControl['init']();
        sizeControl['bindControls']();
        mainControl['bindControls']();
    };

    var sizeControl = {
        resize: function () {
            jQuery(sliderInstance['instance'])['css']({
                height: jQuery(sliderInstance['instance'])['find']('.slide:first')['height']()
            });
			
            mainControl['position']();
        },
        bindControls: function () {
            jQuery(window)['resize'](function () {
                sizeControl['resize']();
            });
        }
    };

    var mainControl = {
        position: function () {
            jQuery(sliderInstance['instance'] + ' .slidePrev,' + sliderInstance['instance'] + ' .slideNext')['css']({
                top: jQuery(sliderInstance['instance'])['height']() / 2 - jQuery(sliderInstance['instance'] + ' .slideNext')['height']() / 2
            });
            jQuery(sliderInstance['instance'] + ' .slidePrev')['css']({
                left: 0
            });
            jQuery(sliderInstance['instance'] + ' .slideNext')['css']({
                right: 0
            });
        },
        bindControls: function () {
            jQuery(sliderInstance['instance'] + ' .slidePrev,' + sliderInstance['instance'] + ' .slideNext')['on']('mouseover', function () {
                jQuery(this)['animate']({
                    opacity: 1
                }, {
                    queue: false,
                    duration: 1000,
                    easing: 'easeOutCubic'
                });
            });
			
            jQuery(sliderInstance['instance'] + ' .slidePrev,' + sliderInstance['instance'] + ' .slideNext')['on']('mouseout', function () {
                jQuery(this)['animate']({
                    opacity: 0.5
                }, {
                    queue: false,
                    duration: 1000,
                    easing: 'easeOutCubic'
                });
            });
			
            jQuery(document)['on']('keyup', function (event) {
                if (event['which'] === 39) {
                    jQuery(sliderInstance['instance'] + ' .slideNext')['trigger']('click');
                };
				
                if (event['which'] === 37) {
                    jQuery(sliderInstance['instance'] + ' .slidePrev')['trigger']('click');
                };
            });
			
            jQuery(sliderInstance['instance'] + ' .slideNext')['on']('click', function () {
                if (jQuery(sliderInstance['instance'] + ' .slide')['is'](':animated')) {
                    return;
                };
				
                if (jQuery(sliderInstance['instance'] + ' .slide:eq(' + (sliderInstance['cs'] + 1) + ')')['length'] <= 0) {
                    sliderInstance['cs'] = 0;
                    jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['stop']();
                    jQuery(sliderInstance['instance'] + ' .timers .timer:last .progress')['animate']({
                        width: '100%'
                    }, {
                        queue: false,
                        duration: sliderInstance['duration'],
                        easing: 'easeOutCubic',
                        complete: function () {
                            jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['css']({
                                width: '0%'
                            });
                        }
                    });
                } else {
                    sliderInstance['cs']++;
                    jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['stop']();
                    jQuery(sliderInstance['instance'] + ' .timers .timer:lt(' + sliderInstance['cs'] + ') .progress')['animate']({
                        width: '100%'
                    }, {
                        queue: false,
                        duration: sliderInstance['duration'],
                        easing: 'easeOutCubic'
                    });
                };
				
                textControl['show']();
            });
			
            jQuery(sliderInstance['instance'] + ' .slidePrev')['on']('click', function () {
                if (jQuery(sliderInstance['instance'] + ' .slide')['is'](':animated')) {
                    return;
                };
				
                if (sliderInstance['cs'] <= 0) {
                    sliderInstance['cs'] = jQuery(sliderInstance['instance'] + ' .slide:last')['index']();
                    jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['stop']();
                    jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['css']({
                        width: '100%'
                    });
                    jQuery(sliderInstance['instance'] + ' .timers .timer:last .progress')['animate']({
                        width: '0%'
                    }, {
                        queue: false,
                        duration: sliderInstance['duration'],
                        easing: 'easeOutCubic'
                    });
                } else {
                    sliderInstance['cs']--;
                    jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['stop']();
                    jQuery(sliderInstance['instance'] + ' .timers .timer:gt(' + sliderInstance['cs'] + ') .progress')['css']({
                        width: '0%'
                    });
                    jQuery(sliderInstance['instance'] + ' .timers .timer:eq(' + sliderInstance['cs'] + ') .progress')['animate']({
                        width: '0%'
                    }, {
                        queue: false,
                        duration: sliderInstance['duration'],
                        easing: 'easeOutCubic'
                    });
                };
				
                textControl['show']();
            });
			
            jQuery(document)['on']('click', sliderInstance['instance'] + ' .bullets .bullet', function () {
                if (jQuery(sliderInstance['instance'] + ' .slide')['is'](':animated')) {
                    return;
                };
                sliderInstance['cs'] = jQuery(this)['index']();
                jQuery(sliderInstance['instance'] + ' .timers .timer .progress')['stop']();
                jQuery(sliderInstance['instance'] + ' .timers .timer:gt(' + sliderInstance['cs'] + ') .progress')['css']({
                    width: '0%'
                });
                jQuery(sliderInstance['instance'] + ' .timers .timer:lt(' + sliderInstance['cs'] + ') .progress')['css']({
                    width: '100%'
                });
                jQuery(sliderInstance['instance'] + ' .timers .timer:eq(' + sliderInstance['cs'] + ') .progress')['animate']({
                    width: '0%'
                }, {
                    queue: false,
                    duration: sliderInstance['duration'],
                    easing: 'easeOutCubic'
                });
                textControl['show']();
            });
        }
    };
    var textControl = {
        init: function () {
            if (sliderInstance['bullets'] == '0') {
                jQuery(sliderInstance['instance'] + ' .bullets')['hide']();
            };
			
            if (sliderInstance['arrows'] == '0') {
                jQuery(sliderInstance['instance'] + ' .slidePrev' + sliderInstance['instance'] + ' .slideNext')['hide']();
            };
			
            jQuery(sliderInstance['instance'] + ' .slide img')['imagesLoaded'](function () {
                for (var slides = 0; slides < jQuery(sliderInstance['instance'] + ' .slide')['length']; slides++) {
                    jQuery('<div class="timer"><div class="progress"></div></div>')['appendTo'](sliderInstance['instance'] + ' .timers');
                    jQuery('<div class="bullet"><i class="fa fa-circle"></i></div>')['appendTo'](sliderInstance['instance'] + ' .bullets');
                };
				
                jQuery(sliderInstance['instance'] + ' .bullets .bullet:eq(' + sliderInstance['cs'] + ')')['addClass']('active');
				
                jQuery(sliderInstance['instance'] + ' .timers')['css']({
                    width: (jQuery(sliderInstance['instance'] + ' .timers .timer')['length'] + 1) * jQuery(sliderInstance['instance'] + ' .timers .timer')['width']() + 5
                });
				
                jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ')')['fadeIn']({
                    duration: 1500,
                    easing: 'swing'
                });
				
                jQuery(sliderInstance['instance'])['animate']({
                    height: jQuery(sliderInstance['instance'] + ' .slide:first img')['height']()
                }, {
                    duration: 750,
                    easing: 'easeInOutExpo',
                    complete: function () {
                        jQuery(sliderInstance['instance'] + ' .slidePrev')['animate']({
                            left: 0
                        }, {
                            duration: 1500,
                            easing: 'easeInOutExpo'
                        });
                        jQuery(sliderInstance['instance'] + ' .slideNext')['animate']({
                            right: 0
                        }, {
                            duration: 1500,
                            easing: 'easeInOutExpo'
                        });
                        jQuery(sliderInstance['instance'] + ' .bullets')['animate']({
                            bottom: 15
                        }, {
                            duration: 1500,
                            easing: 'easeInOutExpo'
                        });
						
                        textControl['showText']();
                        mainControl['position']();
                        sizeControl['resize']();
                        runControl['run']();
                        runControl['focus']();
                    }
                });
            });
        },
        show: function () {
            textControl['hideText']();
			
            jQuery(sliderInstance['instance'] + ' .bullets .bullet')['removeClass']('active');
            jQuery(sliderInstance['instance'] + ' .bullets .bullet:eq(' + sliderInstance['cs'] + ')')['addClass']('active');
            jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ')')['css']({
                opacity: 0,
                zIndex: 2
            })['show']()['animate']({
                opacity: 1
            }, {
                queue: false,
                duration: sliderInstance['duration'],
                easing: 'swing',
                complete: function () {
                    jQuery(sliderInstance['instance'] + ' .slide:lt(' + sliderInstance['cs'] + '),' + sliderInstance['instance'] + ' .slide:gt(' + sliderInstance['cs'] + ')')['css']({
                        zIndex: 0
                    })['hide']();
					
                    jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ')')['css']({
                        zIndex: 1
                    });
					
                    textControl['showText']();
                    runControl['run']();
                }
            });
        },
        showText: function () {
            var sliderContent = jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ') .slide_content_wrap');
			
            sliderContent['css']({
                top: '75%',
                left: 0,
                display: 'block'
            });
			
            sliderContent['css']({
                marginTop: -1 * sliderContent['height']() / 2,
                marginLeft: '8%'
            });
			
            jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ') .title')['fadeTo'](300, 1);
			
            setTimeout(function () {
                jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ') .description')['fadeTo'](300, 1);
            }, 150);
			
            setTimeout(function () {
                jQuery(sliderInstance['instance'] + ' .slide:eq(' + sliderInstance['cs'] + ') .readmore')['fadeTo'](300, 1);
            }, 300);
        },
        hideText: function () {
            jQuery(sliderInstance['instance'] + ' .slide .title')['fadeTo'](300, 0);
			
            setTimeout(function () {
                jQuery(sliderInstance['instance'] + ' .slide .description')['fadeTo'](300, 0);
            }, 150);
			
            setTimeout(function () {
                jQuery(sliderInstance['instance'] + ' .slide .readmore')['fadeTo'](300, 0);
            }, 300);
        }
    };
	
    var runControl = {
        run: function () {
            if (sliderInstance['pause'] === 0) {
                return;
            };
            jQuery(sliderInstance['instance'] + ' .timer:eq(' + sliderInstance['cs'] + ') .progress')['animate']({
                width: '100%'
            }, {
                queue: false,
                duration: (sliderInstance['pause'] - (sliderInstance['pause'] / 100) * (((jQuery(sliderInstance['instance'] 
					+ ' .timer:eq(' + sliderInstance['cs'] + ') .progress')['width']() / jQuery(sliderInstance['instance'] 
					+ ' .timer:eq(' + sliderInstance['cs'] + ')')['width']()) * 100))),
                easing: 'linear',
                complete: function () {
                    jQuery(sliderInstance['instance'] + ' .slideNext')['trigger']('click');
                }
            });
        },
        focus: function () {
            if (sliderInstance['hoverpause'] === 1) {
                jQuery(sliderInstance['instance'] + ' .slide_content')['on']('mouseover', function () {
                    if (jQuery(sliderInstance['instance'] + ' .slide')['is'](':animated')) {
                        return;
                    };
                    jQuery(sliderInstance['instance'] + ' .timer .progress')['stop']();
                });
                jQuery(sliderInstance['instance'] + ' .slide_content')['on']('mouseleave', function () {
                    if (jQuery(sliderInstance['instance'] + ' .slide')['is'](':animated')) {
                        return;
                    };
                    runControl['run']();
                });
            };
        }
    };
};

jQuery(document)['ready'](function () {
    new slider()['init']({
        unique: 'slider',
        duration: '1000',
        hoverpause: '1',
        pause: '6000',
        arrows: '1',
        bullets: '1'
    });
});