﻿(function (a) {
    function b() {
        url = location.href;
        hashtag = url.indexOf("#prettyPhoto") !== -1 ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)) : false;
        return hashtag
    }

    function c() {
        if (typeof theRel == "undefined") return;
        location.hash = theRel + "/" + rel_index + "/"
    }

    function d() {
        if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
    }

    function e(a, b) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = "[\\?&]" + a + "=([^&#]*)";
        var d = new RegExp(c);
        var e = d.exec(b);
        return e == null ? "" : e[1]
    }

    a.prettyPhoto = {version: "3.1.4"};
    a.fn.prettyPhoto = function (f) {
        function r() {
            a(".pp_loaderIcon").hide();
            projectedTop = scroll_pos["scrollTop"] + (o / 2 - i["containerHeight"] / 2);
            if (projectedTop < 0) projectedTop = 0;
            $ppt.fadeTo(settings.animation_speed, 1);
            $pp_pic_holder.find(".pp_content").animate({
                height: i["contentHeight"],
                width: i["contentWidth"]
            }, settings.animation_speed);
            $pp_pic_holder.animate({
                top: projectedTop,
                left: p / 2 - i["containerWidth"] / 2 < 0 ? 0 : p / 2 - i["containerWidth"] / 2,
                width: i["containerWidth"]
            }, settings.animation_speed, function () {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(i["height"]).width(i["width"]);
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                if (isSet && w(pp_images[set_position]) == "image") {
                    $pp_pic_holder.find(".pp_hoverContainer").show()
                } else {
                    $pp_pic_holder.find(".pp_hoverContainer").hide()
                }
                if (settings.allow_expand) {
                    if (i["resized"]) {
                        a("a.pp_expand,a.pp_contract").show()
                    } else {
                        a("a.pp_expand").hide()
                    }
                }
                if (settings.autoplay_slideshow && !q && !j) a.prettyPhoto.startSlideshow();
                settings.changepicturecallback();
                j = true
            });
            A();
            f.ajaxcallback()
        }

        function s(b) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
                a(".pp_loaderIcon").show();
                b()
            })
        }

        function t(b) {
            b > 1 ? a(".pp_nav").show() : a(".pp_nav").hide()
        }

        function u(a, b) {
            resized = false;
            v(a, b);
            imageWidth = a, imageHeight = b;
            if ((n > p || m > o) && doresize && settings.allow_resize && !h) {
                resized = true, fitting = false;
                while (!fitting) {
                    if (n > p) {
                        imageWidth = p - 200;
                        imageHeight = b / a * imageWidth
                    } else if (m > o) {
                        imageHeight = o - 200;
                        imageWidth = a / b * imageHeight
                    } else {
                        fitting = true
                    }
                    m = imageHeight, n = imageWidth
                }
                v(imageWidth, imageHeight);
                if (n > p || m > o) {
                    u(n, m)
                }
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(m),
                containerWidth: Math.floor(n) + settings.horizontal_padding * 2,
                contentHeight: Math.floor(k),
                contentWidth: Math.floor(l),
                resized: resized
            }
        }

        function v(b, c) {
            b = parseFloat(b);
            c = parseFloat(c);
            $pp_details = $pp_pic_holder.find(".pp_details");
            $pp_details.width(b);
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(b).appendTo(a("body")).css({
                position: "absolute",
                top: -1e4
            });
            detailsHeight += $pp_details.height();
            detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
            if (a.browser.msie && a.browser.version == 7) detailsHeight += 8;
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find(".ppt");
            $pp_title.width(b);
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
            $pp_title = $pp_title.clone().appendTo(a("body")).css({position: "absolute", top: -1e4});
            titleHeight += $pp_title.height();
            $pp_title.remove();
            k = c + detailsHeight;
            l = b;
            m = k + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
            n = b
        }

        function w(a) {
            if (a.match(/youtube\.com\/watch/i) || a.match(/youtu\.be/i)) {
                return "youtube"
            } else if (a.match(/vimeo\.com/i)) {
                return "vimeo"
            } else if (a.match(/\b.mov\b/i)) {
                return "quicktime"
            } else if (a.match(/\b.swf\b/i)) {
                return "flash"
            } else if (a.match(/\biframe=true\b/i)) {
                return "iframe"
            } else if (a.match(/\bajax=true\b/i)) {
                return "ajax"
            } else if (a.match(/\bcustom=true\b/i)) {
                return "custom"
            } else if (a.substr(0, 1) == "#") {
                return "inline"
            } else {
                return "image"
            }
        }

        function x() {
            if (doresize && typeof $pp_pic_holder != "undefined") {
                scroll_pos = y();
                contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
                projectedTop = o / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
                if (projectedTop < 0) projectedTop = 0;
                if (contentHeight > o) return;
                $pp_pic_holder.css({top: projectedTop, left: p / 2 + scroll_pos["scrollLeft"] - contentwidth / 2})
            }
        }

        function y() {
            if (self.pageYOffset) {
                return {scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset}
            } else if (document.documentElement && document.documentElement.scrollTop) {
                return {scrollTop: document.documentElement.scrollTop, scrollLeft: document.documentElement.scrollLeft}
            } else if (document.body) {
                return {scrollTop: document.body.scrollTop, scrollLeft: document.body.scrollLeft}
            }
        }

        function z() {
            o = a(window).height(), p = a(window).width();
            if (typeof $pp_overlay != "undefined") $pp_overlay.height(a(document).height()).width(p)
        }

        function A() {
            if (isSet && settings.overlay_gallery && w(pp_images[set_position]) == "image" && settings.ie6_fallback && !(a.browser.msie && parseInt(a.browser.version) == 6)) {
                itemWidth = 52 + 5;
                navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
                itemsPerPage = Math.floor((i["containerWidth"] - 100 - navWidth) / itemWidth);
                itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
                totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                if (totalPage == 0) {
                    navWidth = 0;
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
                } else {
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
                }
                galleryWidth = itemsPerPage * itemWidth;
                fullGalleryWidth = pp_images.length * itemWidth;
                $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
                goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
                a.prettyPhoto.changeGalleryPage(goToPage);
                $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
            } else {
                $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }
        }

        function B(b) {
            if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
            settings.markup = settings.markup.replace("{pp_social}", "");
            a("body").append(settings.markup);
            $pp_pic_holder = a(".pp_pic_holder"), $ppt = a(".ppt"), $pp_overlay = a("div.pp_overlay");
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var c = 0; c < pp_images.length; c++) {
                    if (!pp_images[c].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                        classname = "default";
                        img_src = ""
                    } else {
                        classname = "";
                        img_src = pp_images[c]
                    }
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
                }
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find("#pp_full_res").after(toInject);
                $pp_gallery = a(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li");
                $pp_gallery.find(".pp_arrow_next").click(function () {
                    a.prettyPhoto.changeGalleryPage("next");
                    a.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_gallery.find(".pp_arrow_previous").click(function () {
                    a.prettyPhoto.changeGalleryPage("previous");
                    a.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_pic_holder.find(".pp_content").hover(function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function () {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                });
                itemWidth = 52 + 5;
                $pp_gallery_li.each(function (b) {
                    a(this).find("a").click(function () {
                        a.prettyPhoto.changePage(b);
                        a.prettyPhoto.stopSlideshow();
                        return false
                    })
                })
            }
            if (settings.slideshow) {
                $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
                $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
                    a.prettyPhoto.startSlideshow();
                    return false
                })
            }
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            $pp_overlay.css({
                opacity: 0,
                height: a(document).height(),
                width: a(window).width()
            }).bind("click", function () {
                if (!settings.modal) a.prettyPhoto.close()
            });
            a("a.pp_close").bind("click", function () {
                a.prettyPhoto.close();
                return false
            });
            if (settings.allow_expand) {
                a("a.pp_expand").bind("click", function (b) {
                    if (a(this).hasClass("pp_expand")) {
                        a(this).removeClass("pp_expand").addClass("pp_contract");
                        doresize = false
                    } else {
                        a(this).removeClass("pp_contract").addClass("pp_expand");
                        doresize = true
                    }
                    s(function () {
                        a.prettyPhoto.open()
                    });
                    return false
                })
            }
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
                a.prettyPhoto.changePage("previous");
                a.prettyPhoto.stopSlideshow();
                return false
            });
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
                a.prettyPhoto.changePage("next");
                a.prettyPhoto.stopSlideshow();
                return false
            });
            x()
        }

        f = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function () {
            },
            slideshow: 5e3,
            autoplay_slideshow: false,
            opacity: .8,
            show_title: true,
            allow_resize: true,
            allow_expand: true,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: false,
            wmode: "opaque",
            autoplay: true,
            modal: false,
            deeplinking: true,
            overlay_gallery: true,
            overlay_gallery_max: 30,
            keyboard_shortcuts: true,
            changepicturecallback: function () {
            },
            callback: function () {
            },
            ie6_fallback: true,
            markup: '<div class="pp_pic_holder">       <div class="ppt"> </div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
            image_markup: '<img id="fullResImage" src="{path}">',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="movie" value="{path}"><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, f);
        var g = this, h = false, i, j, k, l, m, n, o = a(window).height(), p = a(window).width(), q;
        doresize = true, scroll_pos = y();
        a(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
            x();
            z()
        });
        if (f.keyboard_shortcuts) {
            a(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (b) {
                if (typeof $pp_pic_holder != "undefined") {
                    if ($pp_pic_holder.is(":visible")) {
                        switch (b.keyCode) {
                            case 37:
                                a.prettyPhoto.changePage("previous");
                                b.preventDefault();
                                break;
                            case 39:
                                a.prettyPhoto.changePage("next");
                                b.preventDefault();
                                break;
                            case 27:
                                if (!settings.modal) a.prettyPhoto.close();
                                b.preventDefault();
                                break
                        }
                    }
                }
            })
        }
        a.prettyPhoto.initialize = function () {
            settings = f;
            if (settings.theme == "pp_default") settings.horizontal_padding = 16;
            if (settings.ie6_fallback && a.browser.msie && parseInt(a.browser.version) == 6) settings.theme = "light_square";
            theRel = a(this).attr(settings.hook);
            galleryRegExp = /\[(?:.*)\]/;
            isSet = galleryRegExp.exec(theRel) ? true : false;
            pp_images = isSet ? jQuery.map(g, function (b, c) {
                if (a(b).attr(settings.hook).indexOf(theRel) != -1) return a(b).attr("href")
            }) : a.makeArray(a(this).attr("href"));
            pp_titles = isSet ? jQuery.map(g, function (b, c) {
                if (a(b).attr(settings.hook).indexOf(theRel) != -1) return a(b).find("img").attr("alt") ? a(b).find("img").attr("alt") : ""
            }) : a.makeArray(a(this).find("img").attr("alt"));
            pp_descriptions = isSet ? jQuery.map(g, function (b, c) {
                if (a(b).attr(settings.hook).indexOf(theRel) != -1) return a(b).attr("title") ? a(b).attr("title") : ""
            }) : a.makeArray(a(this).attr("title"));
            if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
            set_position = jQuery.inArray(a(this).attr("href"), pp_images);
            rel_index = isSet ? set_position : a("a[" + settings.hook + "^='" + theRel + "']").index(a(this));
            B(this);
            if (settings.allow_resize) a(window).bind("scroll.prettyphoto", function () {
                x()
            });
            a.prettyPhoto.open();
            return false
        };
        a.prettyPhoto.open = function (b) {
            if (typeof settings == "undefined") {
                settings = f;
                if (a.browser.msie && a.browser.version == 6) settings.theme = "light_square";
                pp_images = a.makeArray(arguments[0]);
                pp_titles = arguments[1] ? a.makeArray(arguments[1]) : a.makeArray("");
                pp_descriptions = arguments[2] ? a.makeArray(arguments[2]) : a.makeArray("");
                isSet = pp_images.length > 1 ? true : false;
                set_position = arguments[3] ? arguments[3] : 0;
                B(b.target)
            }
            if (a.browser.msie && a.browser.version == 6) a("select").css("visibility", "hidden");
            if (settings.hideflash) a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
            t(a(pp_images).size());
            a(".pp_loaderIcon").show();
            if (settings.deeplinking) c();
            if (settings.social_tools) {
                facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                $pp_pic_holder.find(".pp_social").html(facebook_like_link)
            }
            if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + a(pp_images).size());
            if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
                $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
            } else {
                $pp_pic_holder.find(".pp_description").hide()
            }
            movie_width = parseFloat(e("width", pp_images[set_position])) ? e("width", pp_images[set_position]) : settings.default_width.toString();
            movie_height = parseFloat(e("height", pp_images[set_position])) ? e("height", pp_images[set_position]) : settings.default_height.toString();
            h = false;
            if (movie_height.indexOf("%") != -1) {
                movie_height = parseFloat(a(window).height() * parseFloat(movie_height) / 100 - 150);
                h = true
            }
            if (movie_width.indexOf("%") != -1) {
                movie_width = parseFloat(a(window).width() * parseFloat(movie_width) / 100 - 150);
                h = true
            }
            $pp_pic_holder.fadeIn(function () {
                settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" ");
                imgPreloader = "";
                skipInjection = false;
                switch (w(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image;
                        nextImage = new Image;
                        if (isSet && set_position < a(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
                        prevImage = new Image;
                        if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                        imgPreloader.onload = function () {
                            i = u(imgPreloader.width, imgPreloader.height);
                            r()
                        };
                        imgPreloader.onerror = function () {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                            a.prettyPhoto.close()
                        };
                        imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        i = u(movie_width, movie_height);
                        movie_id = e("v", pp_images[set_position]);
                        if (movie_id == "") {
                            movie_id = pp_images[set_position].split("youtu.be/");
                            movie_id = movie_id[1];
                            if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
                            if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
                        }
                        movie = "http://www.youtube.com/embed/" + movie_id;
                        e("rel", pp_images[set_position]) ? movie += "?rel=" + e("rel", pp_images[set_position]) : movie += "?rel=1";
                        if (settings.autoplay) movie += "&autoplay=1";
                        toInject = settings.iframe_markup.replace(/{width}/g, i["width"]).replace(/{height}/g, i["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        i = u(movie_width, movie_height);
                        movie_id = pp_images[set_position];
                        var b = /http:\/\/(www\.)?vimeo.com\/(\d+)/;
                        var c = movie_id.match(b);
                        movie = "http://player.vimeo.com/video/" + c[2] + "?title=0&byline=0&portrait=0";
                        if (settings.autoplay) movie += "&autoplay=1;";
                        vimeo_width = i["width"] + "/embed/?moog_width=" + i["width"];
                        toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, i["height"]).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        i = u(movie_width, movie_height);
                        i["height"] += 15;
                        i["contentHeight"] += 15;
                        i["containerHeight"] += 15;
                        toInject = settings.quicktime_markup.replace(/{width}/g, i["width"]).replace(/{height}/g, i["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        i = u(movie_width, movie_height);
                        flash_vars = pp_images[set_position];
                        flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                        filename = pp_images[set_position];
                        filename = filename.substring(0, filename.indexOf("?"));
                        toInject = settings.flash_markup.replace(/{width}/g, i["width"]).replace(/{height}/g, i["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        i = u(movie_width, movie_height);
                        frame_url = pp_images[set_position];
                        frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                        toInject = settings.iframe_markup.replace(/{width}/g, i["width"]).replace(/{height}/g, i["height"]).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = false;
                        i = u(movie_width, movie_height);
                        doresize = true;
                        skipInjection = true;
                        a.get(pp_images[set_position], function (a) {
                            toInject = settings.inline_markup.replace(/{content}/g, a);
                            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                            r()
                        });
                        break;
                    case "custom":
                        i = u(movie_width, movie_height);
                        toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = a(pp_images[set_position]).clone().append('<br clear="all">').css({width: settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(a("body")).show();
                        doresize = false;
                        i = u(a(myClone).width(), a(myClone).height());
                        doresize = true;
                        a(myClone).remove();
                        toInject = settings.inline_markup.replace(/{content}/g, a(pp_images[set_position]).html());
                        break
                }
                if (!imgPreloader && !skipInjection) {
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                    r()
                }
            });
            return false
        };
        a.prettyPhoto.changePage = function (b) {
            currentGalleryPage = 0;
            if (b == "previous") {
                set_position--;
                if (set_position < 0) set_position = a(pp_images).size() - 1
            } else if (b == "next") {
                set_position++;
                if (set_position > a(pp_images).size() - 1) set_position = 0
            } else {
                set_position = b
            }
            rel_index = set_position;
            if (!doresize) doresize = true;
            if (settings.allow_expand) {
                a(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
            }
            s(function () {
                a.prettyPhoto.open()
            })
        };
        a.prettyPhoto.changeGalleryPage = function (a) {
            if (a == "next") {
                currentGalleryPage++;
                if (currentGalleryPage > totalPage) currentGalleryPage = 0
            } else if (a == "previous") {
                currentGalleryPage--;
                if (currentGalleryPage < 0) currentGalleryPage = totalPage
            } else {
                currentGalleryPage = a
            }
            slide_speed = a == "next" || a == "previous" ? settings.animation_speed : 0;
            slide_to = currentGalleryPage * itemsPerPage * itemWidth;
            $pp_gallery.find("ul").animate({left: -slide_to}, slide_speed)
        };
        a.prettyPhoto.startSlideshow = function () {
            if (typeof q == "undefined") {
                $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
                    a.prettyPhoto.stopSlideshow();
                    return false
                });
                q = setInterval(a.prettyPhoto.startSlideshow, settings.slideshow)
            } else {
                a.prettyPhoto.changePage("next")
            }
        };
        a.prettyPhoto.stopSlideshow = function () {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
                a.prettyPhoto.startSlideshow();
                return false
            });
            clearInterval(q);
            q = undefined
        };
        a.prettyPhoto.close = function () {
            if ($pp_overlay.is(":animated")) return;
            a.prettyPhoto.stopSlideshow();
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
            a("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
                a(this).remove()
            });
            $pp_overlay.fadeOut(settings.animation_speed, function () {
                if (a.browser.msie && a.browser.version == 6) a("select").css("visibility", "visible");
                if (settings.hideflash) a("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                a(this).remove();
                a(window).unbind("scroll.prettyphoto");
                d();
                settings.callback();
                doresize = true;
                j = false;
                delete settings
            })
        };
        if (!pp_alreadyInitialized && b()) {
            pp_alreadyInitialized = true;
            hashIndex = b();
            hashRel = hashIndex;
            hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
            hashRel = hashRel.substring(0, hashRel.indexOf("/"));
            setTimeout(function () {
                a("a[" + f.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)
        }
        return this.unbind("click.prettyphoto").bind("click.prettyphoto", a.prettyPhoto.initialize)
    };
})(jQuery);
var pp_alreadyInitialized = false;
(function (a) {
    a.fn.fitVids = function (b) {
        var c = {customSelector: null};
        var d = document.createElement("div"), e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        d.className = "fit-vids-style";
        d.innerHTML = "­<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
        e.parentNode.insertBefore(d, e);
        if (b) {
            a.extend(c, b)
        }
        return this.each(function () {
            var b = ["iframe[src^='http://player.vimeo.com']", "iframe[src^='http://www.youtube.com']", "iframe[src^='https://www.youtube.com']", "iframe[src^='http://www.kickstarter.com']", "object", "embed"];
            if (c.customSelector) {
                b.push(c.customSelector)
            }
            var d = a(this).find(b.join(","));
            d.each(function () {
                var b = a(this);
                if (this.tagName.toLowerCase() == "embed" && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var c = this.tagName.toLowerCase() == "object" ? b.attr("height") : b.height(), d = c / b.width();
                if (!b.attr("id")) {
                    var e = "fitvid" + Math.floor(Math.random() * 999999);
                    b.attr("id", e)
                }
                b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", d * 100 + "%");
                b.removeAttr("height").removeAttr("width")
            })
        })
    }
})(jQuery);
(function (a) {
    a.fn.slides = function (b) {
        b = a.extend({}, a.fn.slides.option, b);
        return this.each(function () {
            function w(g, h, i) {
                if (!p && o) {
                    p = true;
                    switch (g) {
                        case "next":
                            l = n;
                            k = n + 1;
                            k = e === k ? 0 : k;
                            r = f * 2;
                            g = -f * 2;
                            n = k;
                            break;
                        case "prev":
                            l = n;
                            k = n - 1;
                            k = k === -1 ? e - 1 : k;
                            r = 0;
                            g = 0;
                            n = k;
                            break;
                        case "pagination":
                            k = parseInt(i, 10);
                            l = a("." + b.paginationClass + " li." + b.currentClass + " a", c).attr("href").match("[^#/]+$");
                            if (k > l) {
                                r = f * 2;
                                g = -f * 2
                            } else {
                                r = 0;
                                g = 0
                            }
                            n = k;
                            break
                    }
                    b.animationStart(n);
                    if (h === "fade") {
                        if (b.crossfade) {
                            d.children(":eq(" + k + ")", c).css({zIndex: 10}).fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                                if (b.autoHeight) {
                                    d.animate({height: d.children(":eq(" + k + ")", c).outerHeight()}, b.autoHeightSpeed, function () {
                                        d.children(":eq(" + l + ")", c).css({display: "none", zIndex: 0});
                                        d.children(":eq(" + k + ")", c).css({zIndex: 0});
                                        b.animationComplete(k + 1);
                                        p = false
                                    })
                                } else {
                                    d.children(":eq(" + l + ")", c).css({display: "none", zIndex: 0});
                                    d.children(":eq(" + k + ")", c).css({zIndex: 0});
                                    b.animationComplete(k + 1);
                                    p = false
                                }
                            })
                        } else {
                            d.children(":eq(" + l + ")", c).fadeOut(b.fadeSpeed, b.fadeEasing, function () {
                                if (b.autoHeight) {
                                    d.animate({height: d.children(":eq(" + k + ")", c).outerHeight()}, b.autoHeightSpeed, function () {
                                        d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing)
                                    })
                                } else {
                                    d.children(":eq(" + k + ")", c).fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                                        if (a.browser.msie) {
                                            a(this).get(0).style.removeAttribute("filter")
                                        }
                                    })
                                }
                                b.animationComplete(k + 1);
                                p = false
                            })
                        }
                    } else {
                        d.children(":eq(" + k + ")").css({left: r, display: "block"});
                        if (b.autoHeight) {
                            d.animate({
                                left: g,
                                height: d.children(":eq(" + k + ")").outerHeight()
                            }, b.slideSpeed, b.slideEasing, function () {
                                d.css({left: -f});
                                d.children(":eq(" + k + ")").css({left: f, zIndex: 5});
                                d.children(":eq(" + l + ")").css({left: f, display: "none", zIndex: 0});
                                b.animationComplete(k + 1);
                                p = false
                            })
                        } else {
                            d.animate({left: g}, b.slideSpeed, b.slideEasing, function () {
                                d.css({left: -f});
                                d.children(":eq(" + k + ")").css({left: f, zIndex: 5});
                                d.children(":eq(" + l + ")").css({left: f, display: "none", zIndex: 0});
                                b.animationComplete(k + 1);
                                p = false
                            })
                        }
                    }
                    if (b.pagination) {
                        a("." + b.paginationClass + " li." + b.currentClass, c).removeClass(b.currentClass);
                        a("." + b.paginationClass + " li:eq(" + k + ")", c).addClass(b.currentClass)
                    }
                }
            }

            function x() {
                clearInterval(c.data("interval"))
            }

            function y() {
                if (b.pause) {
                    clearTimeout(c.data("pause"));
                    clearInterval(c.data("interval"));
                    u = setTimeout(function () {
                        clearTimeout(c.data("pause"));
                        v = setInterval(function () {
                            w("next", i)
                        }, b.play);
                        c.data("interval", v)
                    }, b.pause);
                    c.data("pause", u)
                } else {
                    x()
                }
            }

            a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>');
            var c = a(this), d = a(".slides_control", c), e = d.children().size(), f = d.children().outerWidth(), g = d.children().outerHeight(), h = b.start - 1, i = b.effect.indexOf(",") < 0 ? b.effect : b.effect.replace(" ", "").split(",")[0], j = b.effect.indexOf(",") < 0 ? i : b.effect.replace(" ", "").split(",")[1], k = 0, l = 0, m = 0, n = 0, o, p, q, r, s, t, u, v;
            if (e < 2) {
                a("." + b.container, a(this)).fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                    o = true;
                    b.slidesLoaded()
                });
                a("." + b.next + ", ." + b.prev).fadeOut(0);
                return false
            }
            if (e < 2) {
                return
            }
            if (h < 0) {
                h = 0
            }
            if (h > e) {
                h = e - 1
            }
            if (b.start) {
                n = h
            }
            if (b.randomize) {
                d.randomize()
            }
            a("." + b.container, c).css({overflow: "hidden", position: "relative"});
            d.children().css({
                position: "absolute",
                top: 0,
                left: d.children().outerWidth(),
                zIndex: 0,
                display: "none"
            });
            d.css({position: "relative", width: f * 3, height: g, left: -f});
            a("." + b.container, c).css({display: "block"});
            if (b.autoHeight) {
                d.children().css({height: "auto"});
                d.animate({height: d.children(":eq(" + h + ")").outerHeight()}, b.autoHeightSpeed)
            }
            if (b.preload && d.find("img:eq(" + h + ")").length) {
                a("." + b.container, c).css({background: "url(" + b.preloadImage + ") no-repeat 50% 50%"});
                var z = d.find("img:eq(" + h + ")").attr("src") + "?" + (new Date).getTime();
                if (a("img", c).parent().attr("class") != "slides_control") {
                    t = d.children(":eq(0)")[0].tagName.toLowerCase()
                } else {
                    t = d.find("img:eq(" + h + ")")
                }
                d.find("img:eq(" + h + ")").attr("src", z).load(function () {
                    d.find(t + ":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                        a(this).css({zIndex: 5});
                        a("." + b.container, c).css({background: ""});
                        o = true;
                        b.slidesLoaded()
                    })
                })
            } else {
                d.children(":eq(" + h + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function () {
                    o = true;
                    b.slidesLoaded()
                })
            }
            if (b.bigTarget) {
                d.children().css({cursor: "pointer"});
                d.children().click(function () {
                    w("next", i);
                    return false
                })
            }
            if (b.hoverPause && b.play) {
                d.bind("mouseover", function () {
                    x()
                });
                d.bind("mouseleave", function () {
                    y()
                })
            }
            if (b.generateNextPrev) {
                a("." + b.container, c).after('<a href="#" class="' + b.prev + '">Prev</a>');
                a("." + b.prev, c).after('<a href="#" class="' + b.next + '">Next</a>')
            }
            a("." + b.next, c).click(function (a) {
                a.preventDefault();
                if (b.play) {
                    y()
                }
                w("next", i)
            });
            a("." + b.prev, c).click(function (a) {
                a.preventDefault();
                if (b.play) {
                    y()
                }
                w("prev", i)
            });
            if (b.generatePagination) {
                if (b.prependPagination) {
                    c.prepend("<ul class=" + b.paginationClass + "></ul>")
                } else {
                    c.append("<ul class=" + b.paginationClass + "></ul>")
                }
                d.children().each(function () {
                    a("." + b.paginationClass, c).append('<li><a href="#' + m + '">' + (m + 1) + "</a></li>");
                    m++
                })
            } else {
                a("." + b.paginationClass + " li a", c).each(function () {
                    a(this).attr("href", "#" + m);
                    m++
                })
            }
            a("." + b.paginationClass + " li:eq(" + h + ")", c).addClass(b.currentClass);
            a("." + b.paginationClass + " li a", c).click(function () {
                if (b.play) {
                    y()
                }
                q = a(this).attr("href").match("[^#/]+$");
                if (n != q) {
                    w("pagination", j, q)
                }
                return false
            });
            a("a.link", c).click(function () {
                if (b.play) {
                    y()
                }
                q = a(this).attr("href").match("[^#/]+$") - 1;
                if (n != q) {
                    w("pagination", j, q)
                }
                return false
            });
            if (b.play) {
                v = setInterval(function () {
                    w("next", i)
                }, b.play);
                c.data("interval", v)
            }
        })
    };
    a.fn.slides.option = {
        preload: false,
        preloadImage: "/img/loading.gif",
        container: "slides_container",
        generateNextPrev: false,
        next: "next",
        prev: "prev",
        pagination: true,
        generatePagination: true,
        prependPagination: false,
        paginationClass: "pagination",
        currentClass: "current",
        fadeSpeed: 350,
        fadeEasing: "",
        slideSpeed: 350,
        slideEasing: "",
        start: 1,
        effect: "slide",
        crossfade: false,
        randomize: false,
        play: 0,
        pause: 0,
        hoverPause: false,
        autoHeight: false,
        autoHeightSpeed: 350,
        bigTarget: false,
        animationStart: function () {
        },
        animationComplete: function () {
        },
        slidesLoaded: function () {
        }
    };
    a.fn.randomize = function (b) {
        function c() {
            return Math.round(Math.random()) - .5
        }

        return a(this).each(function () {
            var d = a(this);
            var e = d.children();
            var f = e.length;
            if (f > 1) {
                e.hide();
                var g = [];
                for (i = 0; i < f; i++) {
                    g[g.length] = i
                }
                g = g.sort(c);
                a.each(g, function (a, c) {
                    var f = e.eq(c);
                    var g = f.clone(true);
                    g.show().appendTo(d);
                    if (b !== undefined) {
                        b(f, g)
                    }
                    f.remove()
                })
            }
        })
    }
})(jQuery);
(function (a) {
    function b() {
        var b = a("script:first"), c = b.css("color"), d = false;
        if (/^rgba/.test(c)) d = true; else try {
            d = c != b.css("color", "rgba(0, 0, 0, 0.5)").css("color");
            b.css("color", c)
        } catch (e) {
        }
        return d
    }

    function c(b, c, d) {
        var e = "rgb" + (a.support.rgba ? "a" : "") + "(" + parseInt(b[0] + d * (c[0] - b[0]), 10) + "," + parseInt(b[1] + d * (c[1] - b[1]), 10) + "," + parseInt(b[2] + d * (c[2] - b[2]), 10);
        if (a.support.rgba) e += "," + (b && c ? parseFloat(b[3] + d * (c[3] - b[3])) : 1);
        e += ")";
        return e
    }

    function d(a) {
        var b, c;
        if (b = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a)) c = [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16), 1]; else if (b = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a)) c = [parseInt(b[1], 16) * 17, parseInt(b[2], 16) * 17, parseInt(b[3], 16) * 17, 1]; else if (b = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a)) c = [parseInt(b[1]), parseInt(b[2]), parseInt(b[3]), 1]; else if (b = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a)) c = [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10), parseFloat(b[4])];
        return c
    }

    a.extend(true, a, {support: {rgba: b()}});
    var e = ["color", "backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "outlineColor"];
    a.each(e, function (b, e) {
        a.fx.step[e] = function (b) {
            if (!b.init) {
                b.a = d(a(b.elem).css(e));
                b.end = d(b.end);
                b.init = true
            }
            b.elem.style[e] = c(b.a, b.end, b.pos)
        }
    });
    a.fx.step.borderColor = function (b) {
        if (!b.init) b.end = d(b.end);
        var i = e.slice(2, 6);
        a.each(i, function (e, h) {
            b.init || (b[h] = {a: d(a(b.elem).css(h))});
            b.elem.style[h] = c(b[h].a, b.end, b.pos)
        });
        b.init = true
    }
})(jQuery);
(function (a) {
    function d(a) {
        a = a.replace(/left|top/g, "0px");
        a = a.replace(/right|bottom/g, "100%");
        a = a.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
        var b = a.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
        return [parseFloat(b[1], 10), b[2], parseFloat(b[3], 10), b[4]]
    }

    if (!document.defaultView || !document.defaultView.getComputedStyle) {
        var b = a.curCSS;
        a.curCSS = function (a, c, d) {
            if (c === "background-position") {
                c = "backgroundPosition"
            }
            if (c !== "backgroundPosition" || !a.currentStyle || a.currentStyle[c]) {
                return b.apply(this, arguments)
            }
            var e = a.style;
            if (!d && e && e[c]) {
                return e[c]
            }
            return b(a, "backgroundPositionX", d) + " " + b(a, "backgroundPositionY", d)
        }
    }
    var c = a.fn.animate;
    a.fn.animate = function (a) {
        if ("background-position" in a) {
            a.backgroundPosition = a["background-position"];
            delete a["background-position"]
        }
        if ("backgroundPosition" in a) {
            a.backgroundPosition = "(" + a.backgroundPosition
        }
        return c.apply(this, arguments)
    };
    a.fx.step.backgroundPosition = function (b) {
        if (!b.bgPosReady) {
            var c = a.curCSS(b.elem, "backgroundPosition");
            if (!c) {
                c = "0px 0px"
            }
            c = d(c);
            b.start = [c[0], c[2]];
            var e = d(b.end);
            b.end = [e[0], e[2]];
            b.unit = [e[1], e[3]];
            b.bgPosReady = true
        }
        var f = [];
        f[0] = (b.end[0] - b.start[0]) * b.pos + b.start[0] + b.unit[0];
        f[1] = (b.end[1] - b.start[1]) * b.pos + b.start[1] + b.unit[1];
        b.elem.style.backgroundPosition = f[0] + " " + f[1]
    }
})(jQuery);
window.matchMedia = window.matchMedia || function (a, b) {
        var c, d = a.documentElement, e = d.firstElementChild || d.firstChild, f = a.createElement("body"), g = a.createElement("div");
        g.id = "mq-test-1";
        g.style.cssText = "position:absolute;top:-100em";
        f.appendChild(g);
        return function (a) {
            g.innerHTML = '­<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
            d.insertBefore(f, e);
            c = g.offsetWidth == 42;
            d.removeChild(f);
            return {matches: c, media: a}
        }
    }(document);
(function (a) {
    function w() {
        t(true)
    }

    a.respond = {};
    respond.update = function () {
    };
    respond.mediaQueriesSupported = a.matchMedia && a.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) {
        return
    }
    var b = a.document, c = b.documentElement, d = [], e = [], f = [], g = {}, h = 30, i = b.getElementsByTagName("head")[0] || c, j = b.getElementsByTagName("base")[0], k = i.getElementsByTagName("link"), l = [], m = function () {
        var b = k, c = b.length, d = 0, e, f, h, i;
        for (; d < c; d++) {
            e = b[d], f = e.href, h = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet";
            if (!!f && i && !g[f]) {
                if (e.styleSheet && e.styleSheet.rawCssText) {
                    o(e.styleSheet.rawCssText, f, h);
                    g[f] = true
                } else {
                    if (!j && !/^([a-zA-Z:]*\/\/)/.test(f) || f.replace(RegExp.$1, "").split("/")[0] === a.location.host) {
                        l.push({href: f, media: h})
                    }
                }
            }
        }
        n()
    }, n = function () {
        if (l.length) {
            var a = l.shift();
            u(a.href, function (b) {
                o(b, a.href, a.media);
                g[a.href] = true;
                n()
            })
        }
    }, o = function (a, b, c) {
        var f = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi), g = f && f.length || 0, b = b.substring(0, b.lastIndexOf("/")), h = function (a) {
            return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
        }, i = !g && c, j = 0, k, l, m, n, o;
        if (b.length) {
            b += "/"
        }
        if (i) {
            g = 1
        }
        for (; j < g; j++) {
            k = 0;
            if (i) {
                l = c;
                e.push(h(a))
            } else {
                l = f[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1;
                e.push(RegExp.$2 && h(RegExp.$2))
            }
            n = l.split(",");
            o = n.length;
            for (; k < o; k++) {
                m = n[k];
                d.push({
                    media: m.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                    rules: e.length - 1,
                    hasquery: m.indexOf("(") > -1,
                    minw: m.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                    maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                })
            }
        }
        t()
    }, p, q, r = function () {
        var a, d = b.createElement("div"), e = b.body, f = false;
        d.style.cssText = "position:absolute;font-size:1em;width:1em";
        if (!e) {
            e = f = b.createElement("body")
        }
        e.appendChild(d);
        c.insertBefore(e, c.firstChild);
        a = d.offsetWidth;
        if (f) {
            c.removeChild(e)
        } else {
            e.removeChild(d)
        }
        a = s = parseFloat(a);
        return a
    }, s, t = function (a) {
        var g = "clientWidth", j = c[g], l = b.compatMode === "CSS1Compat" && j || b.body[g] || j, m = {}, n = k[k.length - 1], o = (new Date).getTime();
        if (a && p && o - p < h) {
            clearTimeout(q);
            q = setTimeout(t, h);
            return
        } else {
            p = o
        }
        for (var u in d) {
            var v = d[u], w = v.minw, x = v.maxw, y = w === null, z = x === null, A = "em";
            if (!!w) {
                w = parseFloat(w) * (w.indexOf(A) > -1 ? s || r() : 1)
            }
            if (!!x) {
                x = parseFloat(x) * (x.indexOf(A) > -1 ? s || r() : 1)
            }
            if (!v.hasquery || (!y || !z) && (y || l >= w) && (z || l <= x)) {
                if (!m[v.media]) {
                    m[v.media] = []
                }
                m[v.media].push(e[v.rules])
            }
        }
        for (var u in f) {
            if (f[u] && f[u].parentNode === i) {
                i.removeChild(f[u])
            }
        }
        for (var u in m) {
            var B = b.createElement("style"), C = m[u].join("\n");
            B.type = "text/css";
            B.media = u;
            i.insertBefore(B, n.nextSibling);
            if (B.styleSheet) {
                B.styleSheet.cssText = C
            } else {
                B.appendChild(b.createTextNode(C))
            }
            f.push(B)
        }
    }, u = function (a, b) {
        var c = v();
        if (!c) {
            return
        }
        c.open("GET", a, true);
        c.onreadystatechange = function () {
            if (c.readyState != 4 || c.status != 200 && c.status != 304) {
                return
            }
            b(c.responseText)
        };
        if (c.readyState == 4) {
            return
        }
        c.send(null)
    }, v = function () {
        var a = false;
        try {
            a = new XMLHttpRequest
        } catch (b) {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        }
        return function () {
            return a
        }
    }();
    m();
    respond.update = m;
    if (a.addEventListener) {
        a.addEventListener("resize", w, false)
    } else {
        if (a.attachEvent) {
            a.attachEvent("onresize", w)
        }
    }
})(this);
(function (a) {
    a.fn.touchwipe = function (b) {
        var c = {
            min_move_x: 20, min_move_y: 20, wipeLeft: function () {
            }, wipeRight: function () {
            }, wipeUp: function () {
            }, wipeDown: function () {
            }, preventDefaultEvents: true
        };
        if (b) a.extend(c, b);
        this.each(function () {
            function e() {
                this.removeEventListener("touchmove", f);
                a = null;
                d = false
            }

            function f(f) {
                if (c.preventDefaultEvents) {
                    f.preventDefault()
                }
                if (d) {
                    var g = f.touches[0].pageX;
                    var h = f.touches[0].pageY;
                    var i = a - g;
                    var j = b - h;
                    if (Math.abs(i) >= c.min_move_x) {
                        e();
                        if (i > 0) {
                            c.wipeLeft()
                        } else {
                            c.wipeRight()
                        }
                    } else if (Math.abs(j) >= c.min_move_y) {
                        e();
                        if (j > 0) {
                            c.wipeDown()
                        } else {
                            c.wipeUp()
                        }
                    }
                }
            }

            function g(c) {
                if (c.touches.length == 1) {
                    a = c.touches[0].pageX;
                    b = c.touches[0].pageY;
                    d = true;
                    this.addEventListener("touchmove", f, false)
                }
            }

            var a;
            var b;
            var d = false;
            if ("ontouchstart" in document.documentElement) {
                this.addEventListener("touchstart", g, false)
            }
        });
        return this
    }
})(jQuery);
(function (a) {
    a.flexslider = function (b, c) {
        var d = b;
        d.init = function () {
            d.vars = a.extend({}, a.flexslider.defaults, c);
            d.data("flexslider", true);
            d.container = a(".slides", d).first();
            d.slides = a(".slides:first > li", d);
            d.count = d.slides.length;
            d.animating = false;
            d.currentSlide = d.vars.slideToStart;
            d.animatingTo = d.currentSlide;
            d.atEnd = d.currentSlide == 0 ? true : false;
            d.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click";
            d.cloneCount = 0;
            d.cloneOffset = 0;
            d.manualPause = false;
            d.vertical = d.vars.slideDirection == "vertical";
            d.prop = d.vertical ? "top" : "marginLeft";
            d.args = {};
            d.transitions = "webkitTransition" in document.body.style;
            if (d.transitions) {
                d.prop = "-webkit-transform"
            }
            if (d.vars.controlsContainer != "") {
                d.controlsContainer = a(d.vars.controlsContainer).eq(a(".slides").index(d.container));
                d.containerExists = d.controlsContainer.length > 0
            }
            if (d.vars.manualControls != "") {
                d.manualControls = a(d.vars.manualControls, d.containerExists ? d.controlsContainer : d);
                d.manualExists = d.manualControls.length > 0
            }
            if (d.vars.randomize) {
                d.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                });
                d.container.empty().append(d.slides)
            }
            if (d.vars.animation.toLowerCase() == "slide") {
                if (d.transitions) {
                    d.setTransition(0)
                }
                d.css({overflow: "hidden"});
                if (d.vars.animationLoop) {
                    d.cloneCount = 2;
                    d.cloneOffset = 1;
                    d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))
                }
                d.newSlides = a(".slides:first > li", d);
                var b = -1 * (d.currentSlide + d.cloneOffset);
                if (d.vertical) {
                    d.newSlides.css({display: "block", width: "100%", "float": "left"});
                    d.container.height((d.count + d.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        d.css({position: "relative"}).height(d.slides.filter(":first").height());
                        d.args[d.prop] = d.transitions ? "translate3d(0," + b * d.height() + "px,0)" : b * d.height() + "px";
                        d.container.css(d.args)
                    }, 100)
                } else {
                    d.args[d.prop] = d.transitions ? "translate3d(" + b * d.width() + "px,0,0)" : b * d.width() + "px";
                    d.container.width((d.count + d.cloneCount) * 200 + "%").css(d.args);
                    setTimeout(function () {
                        d.newSlides.width(d.width()).css({"float": "left", display: "block"})
                    }, 100)
                }
            } else {
                d.transitions = false;
                d.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%"
                }).eq(d.currentSlide).fadeIn(d.vars.animationDuration)
            }
            if (d.vars.controlNav) {
                if (d.manualExists) {
                    d.controlNav = d.manualControls
                } else {
                    var e = a('<ol class="flex-control-nav"></ol>');
                    var f = 1;
                    for (var g = 0; g < d.count; g++) {
                        e.append("<li><a>" + f + "</a></li>");
                        f++
                    }
                    if (d.containerExists) {
                        a(d.controlsContainer).append(e);
                        d.controlNav = a(".flex-control-nav li a", d.controlsContainer)
                    } else {
                        d.append(e);
                        d.controlNav = a(".flex-control-nav li a", d)
                    }
                }
                d.controlNav.eq(d.currentSlide).addClass("active");
                d.controlNav.bind(d.eventType, function (b) {
                    b.preventDefault();
                    if (!a(this).hasClass("active")) {
                        d.controlNav.index(a(this)) > d.currentSlide ? d.direction = "next" : d.direction = "prev";
                        d.flexAnimate(d.controlNav.index(a(this)), d.vars.pauseOnAction)
                    }
                })
            }
            if (d.vars.directionNav) {
                var h = a('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + d.vars.prevText + '</a></li><li><a class="next" href="#">' + d.vars.nextText + "</a></li></ul>");
                if (d.containerExists) {
                    a(d.controlsContainer).append(h);
                    d.directionNav = a(".flex-direction-nav li a", d.controlsContainer)
                } else {
                    d.append(h);
                    d.directionNav = a(".flex-direction-nav li a", d)
                }
                if (!d.vars.animationLoop) {
                    if (d.currentSlide == 0) {
                        d.directionNav.filter(".prev").addClass("disabled")
                    } else {
                        if (d.currentSlide == d.count - 1) {
                            d.directionNav.filter(".next").addClass("disabled")
                        }
                    }
                }
                d.directionNav.bind(d.eventType, function (b) {
                    b.preventDefault();
                    var c = a(this).hasClass("next") ? d.getTarget("next") : d.getTarget("prev");
                    if (d.canAdvance(c)) {
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                })
            }
            if (d.vars.keyboardNav && a("ul.slides").length == 1) {
                function i(a) {
                    if (d.animating) {
                        return
                    } else {
                        if (a.keyCode != 39 && a.keyCode != 37) {
                            return
                        } else {
                            if (a.keyCode == 39) {
                                var b = d.getTarget("next")
                            } else {
                                if (a.keyCode == 37) {
                                    var b = d.getTarget("prev")
                                }
                            }
                            if (d.canAdvance(b)) {
                                d.flexAnimate(b, d.vars.pauseOnAction)
                            }
                        }
                    }
                }

                a(document).bind("keyup", i)
            }
            if (d.vars.mousewheel) {
                d.mousewheelEvent = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
                d.bind(d.mousewheelEvent, function (a) {
                    a.preventDefault();
                    a = a ? a : window.event;
                    var b = a.detail ? a.detail * -1 : a.wheelDelta / 40, c = b < 0 ? d.getTarget("next") : d.getTarget("prev");
                    if (d.canAdvance(c)) {
                        d.flexAnimate(c, d.vars.pauseOnAction)
                    }
                })
            }
            if (d.vars.slideshow) {
                if (d.vars.pauseOnHover && d.vars.slideshow) {
                    d.hover(function () {
                        d.pause()
                    }, function () {
                        if (!d.manualPause) {
                            d.resume()
                        }
                    })
                }
                d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed)
            }
            if (d.vars.pausePlay) {
                var j = a('<div class="flex-pauseplay"><span></span></div>');
                if (d.containerExists) {
                    d.controlsContainer.append(j);
                    d.pausePlay = a(".flex-pauseplay span", d.controlsContainer)
                } else {
                    d.append(j);
                    d.pausePlay = a(".flex-pauseplay span", d)
                }
                var k = d.vars.slideshow ? "pause" : "play";
                d.pausePlay.addClass(k).text(k == "pause" ? d.vars.pauseText : d.vars.playText);
                d.pausePlay.bind(d.eventType, function (b) {
                    b.preventDefault();
                    if (a(this).hasClass("pause")) {
                        d.pause();
                        d.manualPause = true
                    } else {
                        d.resume();
                        d.manualPause = false
                    }
                })
            }
            if ("ontouchstart" in document.documentElement) {
                var l, m, n, o, p, q, r = false;
                d.each(function () {
                    if ("ontouchstart" in document.documentElement) {
                        this.addEventListener("touchstart", s, false)
                    }
                });
                function s(a) {
                    if (d.animating) {
                        a.preventDefault()
                    } else {
                        if (a.touches.length == 1) {
                            d.pause();
                            o = d.vertical ? d.height() : d.width();
                            q = Number(new Date);
                            n = d.vertical ? (d.currentSlide + d.cloneOffset) * d.height() : (d.currentSlide + d.cloneOffset) * d.width();
                            l = d.vertical ? a.touches[0].pageY : a.touches[0].pageX;
                            m = d.vertical ? a.touches[0].pageX : a.touches[0].pageY;
                            d.setTransition(0);
                            this.addEventListener("touchmove", t, false);
                            this.addEventListener("touchend", u, false)
                        }
                    }
                }

                function t(a) {
                    p = d.vertical ? l - a.touches[0].pageY : l - a.touches[0].pageX;
                    r = d.vertical ? Math.abs(p) < Math.abs(a.touches[0].pageX - m) : Math.abs(p) < Math.abs(a.touches[0].pageY - m);
                    if (!r) {
                        a.preventDefault();
                        if (d.vars.animation == "slide" && d.transitions) {
                            if (!d.vars.animationLoop) {
                                p = p / (d.currentSlide == 0 && p < 0 || d.currentSlide == d.count - 1 && p > 0 ? Math.abs(p) / o + 2 : 1)
                            }
                            d.args[d.prop] = d.vertical ? "translate3d(0," + (-n - p) + "px,0)" : "translate3d(" + (-n - p) + "px,0,0)";
                            d.container.css(d.args)
                        }
                    }
                }

                function u(a) {
                    d.animating = false;
                    if (d.animatingTo == d.currentSlide && !r && !(p == null)) {
                        var b = p > 0 ? d.getTarget("next") : d.getTarget("prev");
                        if (d.canAdvance(b) && Number(new Date) - q < 550 && Math.abs(p) > 20 || Math.abs(p) > o / 2) {
                            d.flexAnimate(b, d.vars.pauseOnAction)
                        } else {
                            d.flexAnimate(d.currentSlide, d.vars.pauseOnAction)
                        }
                    }
                    this.removeEventListener("touchmove", t, false);
                    this.removeEventListener("touchend", u, false);
                    l = null;
                    m = null;
                    p = null;
                    n = null
                }
            }
            if (d.vars.animation.toLowerCase() == "slide") {
                a(window).resize(function () {
                    if (!d.animating) {
                        if (d.vertical) {
                            d.height(d.slides.filter(":first").height());
                            d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.slides.filter(":first").height() + "px";
                            if (d.transitions) {
                                d.setTransition(0);
                                d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"
                            }
                            d.container.css(d.args)
                        } else {
                            d.newSlides.width(d.width());
                            d.args[d.prop] = -1 * (d.currentSlide + d.cloneOffset) * d.width() + "px";
                            if (d.transitions) {
                                d.setTransition(0);
                                d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"
                            }
                            d.container.css(d.args)
                        }
                    }
                })
            }
            d.vars.start(d)
        };
        d.flexAnimate = function (a, b) {
            if (!d.animating) {
                d.animating = true;
                d.animatingTo = a;
                d.vars.before(d);
                if (b) {
                    d.pause()
                }
                if (d.vars.controlNav) {
                    d.controlNav.removeClass("active").eq(a).addClass("active")
                }
                d.atEnd = a == 0 || a == d.count - 1 ? true : false;
                if (!d.vars.animationLoop && d.vars.directionNav) {
                    if (a == 0) {
                        d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")
                    } else {
                        if (a == d.count - 1) {
                            d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")
                        } else {
                            d.directionNav.removeClass("disabled")
                        }
                    }
                }
                if (!d.vars.animationLoop && a == d.count - 1) {
                    d.pause();
                    d.vars.end(d)
                }
                if (d.vars.animation.toLowerCase() == "slide") {
                    var c = d.vertical ? d.slides.filter(":first").height() : d.slides.filter(":first").width();
                    if (d.currentSlide == 0 && a == d.count - 1 && d.vars.animationLoop && d.direction != "next") {
                        d.slideString = "0px"
                    } else {
                        if (d.currentSlide == d.count - 1 && a == 0 && d.vars.animationLoop && d.direction != "prev") {
                            d.slideString = -1 * (d.count + 1) * c + "px"
                        } else {
                            d.slideString = -1 * (a + d.cloneOffset) * c + "px"
                        }
                    }
                    d.args[d.prop] = d.slideString;
                    if (d.transitions) {
                        d.setTransition(d.vars.animationDuration);
                        d.args[d.prop] = d.vertical ? "translate3d(0," + d.slideString + ",0)" : "translate3d(" + d.slideString + ",0,0)";
                        d.container.css(d.args).one("webkitTransitionEnd transitionend", function () {
                            d.wrapup(c)
                        })
                    } else {
                        d.container.animate(d.args, d.vars.animationDuration, function () {
                            d.wrapup(c)
                        })
                    }
                } else {
                    d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);
                    d.slides.eq(a).fadeIn(d.vars.animationDuration, function () {
                        d.wrapup()
                    })
                }
            }
        };
        d.wrapup = function (a) {
            if (d.vars.animation == "slide") {
                if (d.currentSlide == 0 && d.animatingTo == d.count - 1 && d.vars.animationLoop) {
                    d.args[d.prop] = -1 * d.count * a + "px";
                    if (d.transitions) {
                        d.setTransition(0);
                        d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"
                    }
                    d.container.css(d.args)
                } else {
                    if (d.currentSlide == d.count - 1 && d.animatingTo == 0 && d.vars.animationLoop) {
                        d.args[d.prop] = -1 * a + "px";
                        if (d.transitions) {
                            d.setTransition(0);
                            d.args[d.prop] = d.vertical ? "translate3d(0," + d.args[d.prop] + ",0)" : "translate3d(" + d.args[d.prop] + ",0,0)"
                        }
                        d.container.css(d.args)
                    }
                }
            }
            d.animating = false;
            d.currentSlide = d.animatingTo;
            d.vars.after(d)
        };
        d.animateSlides = function () {
            if (!d.animating) {
                d.flexAnimate(d.getTarget("next"))
            }
        };
        d.pause = function () {
            clearInterval(d.animatedSlides);
            if (d.vars.pausePlay) {
                d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)
            }
        };
        d.resume = function () {
            d.animatedSlides = setInterval(d.animateSlides, d.vars.slideshowSpeed);
            if (d.vars.pausePlay) {
                d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)
            }
        };
        d.canAdvance = function (a) {
            if (!d.vars.animationLoop && d.atEnd) {
                if (d.currentSlide == 0 && a == d.count - 1 && d.direction != "next") {
                    return false
                } else {
                    if (d.currentSlide == d.count - 1 && a == 0 && d.direction == "next") {
                        return false
                    } else {
                        return true
                    }
                }
            } else {
                return true
            }
        };
        d.getTarget = function (a) {
            d.direction = a;
            if (a == "next") {
                return d.currentSlide == d.count - 1 ? 0 : d.currentSlide + 1
            } else {
                return d.currentSlide == 0 ? d.count - 1 : d.currentSlide - 1
            }
        };
        d.setTransition = function (a) {
            d.container.css({"-webkit-transition-duration": a / 1e3 + "s"})
        };
        d.init()
    };
    a.flexslider.defaults = {
        animation: "fade",
        slideDirection: "horizontal",
        slideshow: true,
        slideshowSpeed: 7e3,
        animationDuration: 600,
        directionNav: true,
        controlNav: true,
        keyboardNav: true,
        mousewheel: false,
        prevText: "Previous",
        nextText: "Next",
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        randomize: false,
        slideToStart: 0,
        animationLoop: true,
        pauseOnAction: true,
        pauseOnHover: false,
        controlsContainer: "",
        manualControls: "",
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        }
    };
    a.fn.flexslider = function (b) {
        return this.each(function () {
            if (a(this).find(".slides li").length == 1) {
                a(this).find(".slides li").fadeIn(400)
            } else {
                if (a(this).data("flexslider") != true) {
                    new a.flexslider(a(this), b)
                }
            }
        })
    }
})(jQuery);
(function (a) {
    a.fn.quicksand = function (b, c) {
        var e = {
            duration: 750,
            easing: "swing",
            attribute: "data-id",
            adjustHeight: "auto",
            useScaling: true,
            enhancement: function (a) {
            },
            selector: "> *",
            dx: 0,
            dy: 0
        };
        a.extend(e, c);
        if (a.browser.msie || typeof a.fn.scale == "undefined") {
            e.useScaling = false
        }
        var f;
        if (typeof arguments[1] == "function") {
            var f = arguments[1]
        } else if (typeof (arguments[2] == "function")) {
            var f = arguments[2]
        }
        return this.each(function (c) {
            var g;
            var h = [];
            var i = a(b).clone();
            var j = a(this);
            var k = a(this).css("height");
            var l;
            var m = false;
            var n = a(j).offset();
            var o = [];
            var p = a(this).find(e.selector);
            if (a.browser.msie && a.browser.version.substr(0, 1) < 7) {
                j.html("").append(i);
                return
            }
            var q = 0;
            var r = function () {
                if (!q) {
                    q = 1;
                    $toDelete = j.find("> *");
                    j.prepend(w.find("> *"));
                    $toDelete.remove();
                    if (m) {
                        j.css("height", l)
                    }
                    e.enhancement(j);
                    if (typeof f == "function") {
                        f.call(this)
                    }
                }
            };
            var s = j.offsetParent();
            var t = s.offset();
            if (s.css("position") == "relative") {
                if (s.get(0).nodeName.toLowerCase() == "body") {
                } else {
                    t.top += parseFloat(s.css("border-top-width")) || 0;
                    t.left += parseFloat(s.css("border-left-width")) || 0
                }
            } else {
                t.top -= parseFloat(s.css("border-top-width")) || 0;
                t.left -= parseFloat(s.css("border-left-width")) || 0;
                t.top -= parseFloat(s.css("margin-top")) || 0;
                t.left -= parseFloat(s.css("margin-left")) || 0
            }
            if (isNaN(t.left)) {
                t.left = 0
            }
            if (isNaN(t.top)) {
                t.top = 0
            }
            t.left -= e.dx;
            t.top -= e.dy;
            j.css("height", a(this).height());
            p.each(function (b) {
                o[b] = a(this).offset()
            });
            a(this).stop();
            var u = 0;
            var v = 0;
            p.each(function (b) {
                a(this).stop();
                var c = a(this).get(0);
                if (c.style.position == "absolute") {
                    u = -e.dx;
                    v = -e.dy
                } else {
                    u = e.dx;
                    v = e.dy
                }
                c.style.position = "absolute";
                c.style.margin = "0";
                c.style.top = o[b].top - parseFloat(c.style.marginTop) - t.top + v + "px";
                c.style.left = o[b].left - parseFloat(c.style.marginLeft) - t.left + u + "px"
            });
            var w = a(j).clone();
            var x = w.get(0);
            x.innerHTML = "";
            x.setAttribute("id", "");
            x.style.height = "auto";
            x.style.width = j.width() + "px";
            w.append(i);
            w.insertBefore(j);
            w.css("opacity", 0);
            x.style.zIndex = -1;
            x.style.margin = "0";
            x.style.position = "absolute";
            x.style.top = n.top - t.top + "px";
            x.style.left = n.left - t.left + "px";
            if (e.adjustHeight === "dynamic") {
                j.animate({height: w.height()}, e.duration, e.easing)
            } else if (e.adjustHeight === "auto") {
                l = w.height();
                if (parseFloat(k) < parseFloat(l)) {
                    j.css("height", l)
                } else {
                    m = true
                }
            }
            p.each(function (b) {
                var c = [];
                if (typeof e.attribute == "function") {
                    g = e.attribute(a(this));
                    i.each(function () {
                        if (e.attribute(this) == g) {
                            c = a(this);
                            return false
                        }
                    })
                } else {
                    c = i.filter("[" + e.attribute + "=" + a(this).attr(e.attribute) + "]")
                }
                if (c.length) {
                    if (!e.useScaling) {
                        h.push({
                            element: a(this),
                            animation: {top: c.offset().top - t.top, left: c.offset().left - t.left, opacity: 1}
                        })
                    } else {
                        h.push({
                            element: a(this),
                            animation: {
                                top: c.offset().top - t.top,
                                left: c.offset().left - t.left,
                                opacity: 1,
                                scale: "1.0"
                            }
                        })
                    }
                } else {
                    if (!e.useScaling) {
                        h.push({element: a(this), animation: {opacity: "0.0"}})
                    } else {
                        h.push({element: a(this), animation: {opacity: "0.0", scale: "0.0"}})
                    }
                }
            });
            i.each(function (b) {
                var c = [];
                var f = [];
                if (typeof e.attribute == "function") {
                    g = e.attribute(a(this));
                    p.each(function () {
                        if (e.attribute(this) == g) {
                            c = a(this);
                            return false
                        }
                    });
                    i.each(function () {
                        if (e.attribute(this) == g) {
                            f = a(this);
                            return false
                        }
                    })
                } else {
                    c = p.filter("[" + e.attribute + "=" + a(this).attr(e.attribute) + "]");
                    f = i.filter("[" + e.attribute + "=" + a(this).attr(e.attribute) + "]")
                }
                var k;
                if (c.length === 0) {
                    if (!e.useScaling) {
                        k = {opacity: "1.0"}
                    } else {
                        k = {opacity: "1.0", scale: "1.0"}
                    }
                    d = f.clone();
                    var l = d.get(0);
                    l.style.position = "absolute";
                    l.style.margin = "0";
                    l.style.top = f.offset().top - t.top + "px";
                    l.style.left = f.offset().left - t.left + "px";
                    d.css("opacity", 0);
                    if (e.useScaling) {
                        d.css("transform", "scale(0.0)")
                    }
                    d.appendTo(j);
                    h.push({element: a(d), animation: k})
                }
            });
            w.remove();
            e.enhancement(j);
            for (c = 0; c < h.length; c++) {
                h[c].element.animate(h[c].animation, e.duration, e.easing, r)
            }
        })
    }
})(jQuery);
(function ($) {
    function sc_setScroll(a, b) {
        return {anims: [], duration: a, orgDuration: a, easing: b, startTime: getTime()}
    }

    function sc_startScroll(a) {
        if (typeof a.pre == "object") {
            sc_startScroll(a.pre)
        }
        for (var b = 0, c = a.anims.length; b < c; b++) {
            var d = a.anims[b];
            if (!d) continue;
            if (d[3]) d[0].stop();
            d[0].animate(d[1], {complete: d[2], duration: a.duration, easing: a.easing})
        }
        if (typeof a.post == "object") {
            sc_startScroll(a.post)
        }
    }

    function sc_stopScroll(a, b) {
        if (typeof b != "boolean") b = true;
        if (typeof a.pre == "object") {
            sc_stopScroll(a.pre, b)
        }
        for (var c = 0, d = a.anims.length; c < d; c++) {
            var e = a.anims[c];
            e[0].stop(true);
            if (b) {
                e[0].css(e[1]);
                if (typeof e[2] == "function") e[2]()
            }
        }
        if (typeof a.post == "object") {
            sc_stopScroll(a.post, b)
        }
    }

    function sc_clearTimers(a) {
        if (a.auto) clearTimeout(a.auto);
        return a
    }

    function sc_callCallbacks(a, b, c) {
        if (a.length) {
            for (var d = 0, e = a.length; d < e; d++) {
                a[d].apply(b, c)
            }
        }
        return []
    }

    function fx_fade(a, b, c, d, e) {
        var f = {duration: d, easing: a.easing};
        if (typeof e == "function") f.complete = e;
        b.animate({opacity: c}, f)
    }

    function fx_cover(a, b, c, d, e) {
        var f = ms_getSizes(gi_getOldItemsNext(b.children(), d), d, true)[0], g = ms_getSizes(c.children(), d, true)[0], h = e ? -g : f, i = {}, j = {};
        i[d.d["width"]] = g;
        i[d.d["left"]] = h;
        j[d.d["left"]] = 0;
        a.pre.anims.push([b, {opacity: 1}]);
        a.post.anims.push([c, j, function () {
            $(this).remove()
        }]);
        c.css(i);
        return a
    }

    function fx_uncover(a, b, c, d, e, f) {
        var g = ms_getSizes(gi_getNewItemsNext(b.children(), d, f), d, true)[0], h = ms_getSizes(c.children(), d, true)[0], i = e ? -h : g, j = {}, k = {};
        j[d.d["width"]] = h;
        j[d.d["left"]] = 0;
        k[d.d["left"]] = i;
        a.post.anims.push([c, k, function () {
            $(this).remove()
        }]);
        c.css(j);
        return a
    }

    function nv_showNavi(a, b, c) {
        if (b == "show" || b == "hide") {
            var d = b
        } else if (a.items.minimum >= b) {
            debug(c, "Not enough items: hiding navigation (" + b + " items, " + a.items.minimum + " needed).");
            var d = "hide"
        } else {
            var d = "show"
        }
        var e = d == "show" ? "removeClass" : "addClass", f = cf_c("hidden", c);
        if (a.auto.button) a.auto.button[d]()[e](f);
        if (a.prev.button) a.prev.button[d]()[e](f);
        if (a.next.button) a.next.button[d]()[e](f);
        if (a.pagination.container) a.pagination.container[d]()[e](f)
    }

    function nv_enableNavi(a, b, c) {
        if (a.circular || a.infinite) return;
        var d = b == "removeClass" || b == "addClass" ? b : false, e = cf_c("disabled", c);
        if (a.auto.button && d) {
            a.auto.button[d](e)
        }
        if (a.prev.button) {
            var f = d || b == 0 ? "addClass" : "removeClass";
            a.prev.button[f](e)
        }
        if (a.next.button) {
            var f = d || b == a.items.visible ? "addClass" : "removeClass";
            a.next.button[f](e)
        }
    }

    function go_getObject(a, b) {
        if (typeof b == "function") b = b.call(a);
        if (typeof b == "undefined") b = {};
        return b
    }

    function go_getNaviObject(a, b, c) {
        if (typeof c != "string") c = "";
        b = go_getObject(a, b);
        if (typeof b == "string") {
            var d = cf_getKeyCode(b);
            if (d == -1) b = $(b); else b = d
        }
        if (c == "pagination") {
            if (typeof b == "boolean") b = {keys: b};
            if (typeof b.jquery != "undefined") b = {container: b};
            if (typeof b.container == "function") b.container = b.container.call(a);
            if (typeof b.container == "string") b.container = $(b.container);
            if (typeof b.items != "number") b.items = false
        } else if (c == "auto") {
            if (typeof b.jquery != "undefined") b = {button: b};
            if (typeof b == "boolean") b = {play: b};
            if (typeof b == "number") b = {pauseDuration: b};
            if (typeof b.button == "function") b.button = b.button.call(a);
            if (typeof b.button == "string") b.button = $(b.button)
        } else {
            if (typeof b.jquery != "undefined") b = {button: b};
            if (typeof b == "number") b = {key: b};
            if (typeof b.button == "function") b.button = b.button.call(a);
            if (typeof b.button == "string") b.button = $(b.button);
            if (typeof b.key == "string") b.key = cf_getKeyCode(b.key)
        }
        return b
    }

    function gn_getItemIndex(a, b, c, d, e) {
        if (typeof a == "string") {
            if (isNaN(a)) a = $(a); else a = parseInt(a)
        }
        if (typeof a == "object") {
            if (typeof a.jquery == "undefined") a = $(a);
            a = e.children().index(a);
            if (a == -1) a = 0;
            if (typeof c != "boolean") c = false
        } else {
            if (typeof c != "boolean") c = true
        }
        if (isNaN(a)) a = 0; else a = parseInt(a);
        if (isNaN(b)) b = 0; else b = parseInt(b);
        if (c) {
            a += d.first
        }
        a += b;
        if (d.total > 0) {
            while (a >= d.total) {
                a -= d.total
            }
            while (a < 0) {
                a += d.total
            }
        }
        return a
    }

    function gn_getVisibleItemsPrev(a, b, c) {
        var d = 0, e = 0;
        for (var f = c; f >= 0; f--) {
            var g = a.eq(f);
            d += g.is(":visible") ? g[b.d["outerWidth"]](true) : 0;
            if (d > b.maxDimention) return e;
            if (f == 0) f = a.length;
            e++
        }
    }

    function gn_getVisibleItemsPrevFilter(a, b, c) {
        return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
    }

    function gn_getScrollItemsPrevFilter(a, b, c, d) {
        return gn_getItemsPrevFilter(a, b.items.filter, d, c)
    }

    function gn_getItemsPrevFilter(a, b, c, d) {
        var e = 0, f = 0;
        for (var g = d, h = a.length - 1; g >= 0; g--) {
            f++;
            if (f == h) return f;
            var i = a.eq(g);
            if (i.is(b)) {
                e++;
                if (e == c) return f
            }
            if (g == 0) g = a.length
        }
    }

    function gn_getVisibleOrg(a, b) {
        return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
    }

    function gn_getVisibleItemsNext(a, b, c) {
        var d = 0, e = 0;
        for (var f = c, g = a.length - 1; f <= g; f++) {
            var h = a.eq(f);
            d += h.is(":visible") ? h[b.d["outerWidth"]](true) : 0;
            if (d > b.maxDimention) return e;
            e++;
            if (e == g) return e;
            if (f == g) f = -1
        }
    }

    function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
        var e = gn_getVisibleItemsNext(a, b, c);
        if (!b.circular) {
            if (c + e > d) e = d - c
        }
        return e
    }

    function gn_getVisibleItemsNextFilter(a, b, c) {
        return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
    }

    function gn_getScrollItemsNextFilter(a, b, c, d) {
        return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
    }

    function gn_getItemsNextFilter(a, b, c, d, e) {
        var f = 0, g = 0;
        for (var h = d, i = a.length - 1; h <= i; h++) {
            g++;
            if (g == i) return g;
            var j = a.eq(h);
            if (j.is(b)) {
                f++;
                if (f == c) return g
            }
            if (h == i) h = -1
        }
    }

    function gi_getCurrentItems(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsPrev(a, b, c) {
        return a.slice(c, b.items.visibleConf.old + c)
    }

    function gi_getNewItemsPrev(a, b) {
        return a.slice(0, b.items.visible)
    }

    function gi_getOldItemsNext(a, b) {
        return a.slice(0, b.items.visibleConf.old)
    }

    function gi_getNewItemsNext(a, b, c) {
        return a.slice(c, b.items.visible + c)
    }

    function sz_resetMargin(a, b, c) {
        var d = typeof c == "boolean" ? c : false;
        if (typeof c != "number") c = 0;
        a.each(function () {
            var a = $(this);
            var e = parseInt(a.css(b.d["marginRight"]));
            if (isNaN(e)) e = 0;
            a.data("cfs_tempCssMargin", e);
            a.css(b.d["marginRight"], d ? a.data("cfs_tempCssMargin") : c + a.data("cfs_origCssMargin"))
        })
    }

    function sz_setSizes(a, b, c) {
        var d = a.parent(), e = a.children(), f = gi_getCurrentItems(e, b), g = cf_mapWrapperSizes(ms_getSizes(f, b, true), b, c);
        d.css(g);
        if (b.usePadding) {
            var c = b.padding, h = c[b.d[1]];
            if (b.align) {
                if (h < 0) h = 0
            }
            var i = f.last();
            i.css(b.d["marginRight"], i.data("cfs_origCssMargin") + h);
            a.css(b.d["top"], c[b.d[0]]);
            a.css(b.d["left"], c[b.d[3]])
        }
        a.css(b.d["width"], g[b.d["width"]] + ms_getTotalSize(e, b, "width") * 2);
        a.css(b.d["height"], ms_getLargestSize(e, b, "height"));
        return g
    }

    function ms_getSizes(a, b, c) {
        var d = ms_getTotalSize(a, b, "width", c), e = ms_getLargestSize(a, b, "height", c);
        return [d, e]
    }

    function ms_getLargestSize(a, b, c, d) {
        if (typeof d != "boolean") d = false;
        if (typeof b[b.d[c]] == "number" && d) return b[b.d[c]];
        if (typeof b.items[b.d[c]] == "number") return b.items[b.d[c]];
        var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight";
        return ms_getTrueLargestSize(a, b, e)
    }

    function ms_getTrueLargestSize(a, b, c) {
        var d = 0;
        for (var e = 0, f = a.length; e < f; e++) {
            var g = a.eq(e);
            var h = g.is(":visible") ? g[b.d[c]](true) : 0;
            if (d < h) d = h
        }
        return d
    }

    function ms_getTrueInnerSize(a, b, c) {
        if (!a.is(":visible")) return 0;
        var d = a[b.d[c]](), e = b.d[c].toLowerCase().indexOf("width") > -1 ? ["paddingLeft", "paddingRight"] : ["paddingTop", "paddingBottom"];
        for (var f = 0, g = e.length; f < g; f++) {
            var h = parseInt(a.css(e[f]));
            d -= isNaN(h) ? 0 : h
        }
        return d
    }

    function ms_getTotalSize(a, b, c, d) {
        if (typeof d != "boolean") d = false;
        if (typeof b[b.d[c]] == "number" && d) return b[b.d[c]];
        if (typeof b.items[b.d[c]] == "number") return b.items[b.d[c]] * a.length;
        var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0;
        for (var g = 0, h = a.length; g < h; g++) {
            var i = a.eq(g);
            f += i.is(":visible") ? i[b.d[e]](true) : 0
        }
        return f
    }

    function ms_hasVariableSizes(a, b, c) {
        var d = false, e = false;
        for (var f = 0, g = a.length; f < g; f++) {
            var h = a.eq(f);
            var i = h.is(":visible") ? h[b.d[c]](true) : 0;
            if (d === false) d = i; else if (d != i) e = true;
            if (d == 0) e = true
        }
        return e
    }

    function ms_getPaddingBorderMargin(a, b, c) {
        return a[b.d["outer" + c]](true) - ms_getTrueInnerSize(a, b, "inner" + c)
    }

    function ms_isPercentage(a) {
        return typeof a == "string" && a.slice(-1) == "%"
    }

    function ms_getPercentage(a, b) {
        if (ms_isPercentage(b)) {
            b = b.slice(0, -1);
            if (isNaN(b)) return a;
            a *= b / 100
        }
        return a
    }

    function cf_e(a, b, c, d, e) {
        if (typeof c != "boolean") c = true;
        if (typeof d != "boolean") d = true;
        if (typeof e != "boolean") e = false;
        if (c) a = b.events.prefix + a;
        if (d) a = a + "." + b.events.namespace;
        if (d && e) a += b.serialNumber;
        return a
    }

    function cf_c(a, b) {
        return typeof b.classnames[a] == "string" ? b.classnames[a] : a
    }

    function cf_mapWrapperSizes(a, b, c) {
        if (typeof c != "boolean") c = true;
        var d = b.usePadding && c ? b.padding : [0, 0, 0, 0];
        var e = {};
        e[b.d["width"]] = a[0] + d[1] + d[3];
        e[b.d["height"]] = a[1] + d[0] + d[2];
        return e
    }

    function cf_sortParams(a, b) {
        var c = [];
        for (var d = 0, e = a.length; d < e; d++) {
            for (var f = 0, g = b.length; f < g; f++) {
                if (b[f].indexOf(typeof a[d]) > -1 && typeof c[f] == "undefined") {
                    c[f] = a[d];
                    break
                }
            }
        }
        return c
    }

    function cf_getPadding(a) {
        if (typeof a == "undefined") return [0, 0, 0, 0];
        if (typeof a == "number") return [a, a, a, a]; else if (typeof a == "string") a = a.split("px").join("").split("em").join("").split(" ");
        if (!is_array(a)) {
            return [0, 0, 0, 0]
        }
        for (var b = 0; b < 4; b++) {
            a[b] = parseInt(a[b])
        }
        switch (a.length) {
            case 0:
                return [0, 0, 0, 0];
            case 1:
                return [a[0], a[0], a[0], a[0]];
            case 2:
                return [a[0], a[1], a[0], a[1]];
            case 3:
                return [a[0], a[1], a[2], a[1]];
            default:
                return [a[0], a[1], a[2], a[3]]
        }
    }

    function cf_getAlignPadding(a, b) {
        var c = typeof b[b.d["width"]] == "number" ? Math.ceil(b[b.d["width"]] - ms_getTotalSize(a, b, "width")) : 0;
        switch (b.align) {
            case "left":
                return [0, c];
            case "right":
                return [c, 0];
            case "center":
            default:
                return [Math.ceil(c / 2), Math.floor(c / 2)]
        }
    }

    function cf_getAdjust(a, b, c, d) {
        var e = a;
        if (typeof c == "function") {
            e = c.call(d, e)
        } else if (typeof c == "string") {
            var f = c.split("+"), g = c.split("-");
            if (g.length > f.length) {
                var h = true, i = g[0], j = g[1]
            } else {
                var h = false, i = f[0], j = f[1]
            }
            switch (i) {
                case "even":
                    e = a % 2 == 1 ? a - 1 : a;
                    break;
                case "odd":
                    e = a % 2 == 0 ? a - 1 : a;
                    break;
                default:
                    e = a;
                    break
            }
            j = parseInt(j);
            if (!isNaN(j)) {
                if (h) j = -j;
                e += j
            }
        }
        if (typeof e != "number") e = 1;
        if (e < 1) e = 1;
        return e
    }

    function cf_getItemsAdjust(a, b, c, d) {
        return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
    }

    function cf_getItemAdjustMinMax(a, b) {
        if (typeof b.min == "number" && a < b.min) a = b.min;
        if (typeof b.max == "number" && a > b.max) a = b.max;
        if (a < 1) a = 1;
        return a
    }

    function cf_getSynchArr(a) {
        if (!is_array(a)) a = [[a]];
        if (!is_array(a[0])) a = [a];
        for (var b = 0, c = a.length; b < c; b++) {
            if (typeof a[b][0] == "string") a[b][0] = $(a[b][0]);
            if (typeof a[b][1] != "boolean") a[b][1] = true;
            if (typeof a[b][2] != "boolean") a[b][2] = true;
            if (typeof a[b][3] != "number") a[b][3] = 0
        }
        return a
    }

    function cf_getKeyCode(a) {
        if (a == "right") return 39;
        if (a == "left") return 37;
        if (a == "up") return 38;
        if (a == "down") return 40;
        return -1
    }

    function cf_setCookie(a, b) {
        if (a) document.cookie = a + "=" + b + "; path=/"
    }

    function cf_readCookie(a) {
        a += "=";
        var b = document.cookie.split(";");
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c];
            while (e.charAt(0) == " ") {
                e = e.slice(1)
            }
            if (e.indexOf(a) == 0) {
                return e.slice(a.length)
            }
        }
        return 0
    }

    function bt_pauseOnHoverConfig(a) {
        if (a && typeof a == "string") {
            var b = a.indexOf("immediate") > -1 ? true : false, c = a.indexOf("resume") > -1 ? true : false
        } else {
            var b = c = false
        }
        return [b, c]
    }

    function bt_mousesheelNumber(a) {
        return typeof a == "number" ? a : null
    }

    function is_array(a) {
        return typeof a == "object" && a instanceof Array
    }

    function getTime() {
        return (new Date).getTime()
    }

    function debug(a, b) {
        if (typeof a == "object") {
            var c = " (" + a.selector + ")";
            a = a.debug
        } else {
            var c = ""
        }
        if (!a) return false;
        if (typeof b == "string") b = "carouFredSel" + c + ": " + b; else b = ["carouFredSel" + c + ":", b];
        if (window.console && window.console.log) window.console.log(b);
        return false
    }

    if ($.fn.carouFredSel) return;
    $.fn.carouFredSel = function (options, configs) {
        if (this.length == 0) {
            debug(true, 'No element found for "' + this.selector + '".');
            return this
        }
        if (this.length > 1) {
            return this.each(function () {
                $(this).carouFredSel(options, configs)
            })
        }
        var $cfs = this, $tt0 = this[0];
        if ($cfs.data("cfs_isCarousel")) {
            var starting_position = $cfs.triggerHandler("_cfs_currentPosition");
            $cfs.trigger("_cfs_destroy", true)
        } else {
            var starting_position = false
        }
        $cfs._cfs_init = function (a, b, c) {
            a = go_getObject($tt0, a);
            if (a.debug) {
                conf.debug = a.debug;
                debug(conf, 'The "debug" option should be moved to the second configuration-object.')
            }
            var d = ["items", "scroll", "auto", "prev", "next", "pagination"];
            for (var e = 0, f = d.length; e < f; e++) {
                a[d[e]] = go_getObject($tt0, a[d[e]])
            }
            if (typeof a.scroll == "number") {
                if (a.scroll <= 50) a.scroll = {items: a.scroll}; else a.scroll = {duration: a.scroll}
            } else {
                if (typeof a.scroll == "string") a.scroll = {easing: a.scroll}
            }
            if (typeof a.items == "number") a.items = {visible: a.items}; else if (a.items == "variable") a.items = {
                visible: a.items,
                width: a.items,
                height: a.items
            };
            if (typeof a.items != "object") a.items = {};
            if (b) opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, a);
            opts = $.extend(true, {}, $.fn.carouFredSel.defaults, a);
            if (typeof opts.items.visibleConf != "object") opts.items.visibleConf = {};
            if (opts.items.start == 0 && typeof c == "number") {
                opts.items.start = c
            }
            crsl.upDateOnWindowResize = opts.responsive;
            crsl.direction = opts.direction == "up" || opts.direction == "left" ? "next" : "prev";
            var g = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]];
            var h = g[0].length, i = opts.direction == "right" || opts.direction == "left" ? 0 : 1;
            opts.d = {};
            for (var j = 0; j < h; j++) {
                opts.d[g[0][j]] = g[i][j]
            }
            var k = $cfs.children();
            switch (typeof opts.items.visible) {
                case "object":
                    opts.items.visibleConf.min = opts.items.visible.min;
                    opts.items.visibleConf.max = opts.items.visible.max;
                    opts.items.visible = false;
                    break;
                case "string":
                    if (opts.items.visible == "variable") {
                        opts.items.visibleConf.variable = true
                    } else {
                        opts.items.visibleConf.adjust = opts.items.visible
                    }
                    opts.items.visible = false;
                    break;
                case "function":
                    opts.items.visibleConf.adjust = opts.items.visible;
                    opts.items.visible = false;
                    break
            }
            if (typeof opts.items.filter == "undefined") {
                opts.items.filter = k.filter(":hidden").length > 0 ? ":visible" : "*"
            }
            if (opts[opts.d["width"]] == "auto") {
                opts[opts.d["width"]] = ms_getTrueLargestSize(k, opts, "outerWidth")
            }
            if (ms_isPercentage(opts[opts.d["width"]]) && !opts.responsive) {
                opts[opts.d["width"]] = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth"), opts[opts.d["width"]]);
                crsl.upDateOnWindowResize = true
            }
            if (opts[opts.d["height"]] == "auto") {
                opts[opts.d["height"]] = ms_getTrueLargestSize(k, opts, "outerHeight")
            }
            if (!opts.items[opts.d["width"]]) {
                if (opts.responsive) {
                    debug(true, "Set a " + opts.d["width"] + " for the items!");
                    opts.items[opts.d["width"]] = ms_getTrueLargestSize(k, opts, "outerWidth")
                } else {
                    opts.items[opts.d["width"]] = ms_hasVariableSizes(k, opts, "outerWidth") ? "variable" : k[opts.d["outerWidth"]](true)
                }
            }
            if (!opts.items[opts.d["height"]]) {
                opts.items[opts.d["height"]] = ms_hasVariableSizes(k, opts, "outerHeight") ? "variable" : k[opts.d["outerHeight"]](true)
            }
            if (!opts[opts.d["height"]]) {
                opts[opts.d["height"]] = opts.items[opts.d["height"]]
            }
            if (!opts.items.visible && !opts.responsive) {
                if (opts.items[opts.d["width"]] == "variable") {
                    opts.items.visibleConf.variable = true
                }
                if (!opts.items.visibleConf.variable) {
                    if (typeof opts[opts.d["width"]] == "number") {
                        opts.items.visible = Math.floor(opts[opts.d["width"]] / opts.items[opts.d["width"]])
                    } else {
                        var l = ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth");
                        opts.items.visible = Math.floor(l / opts.items[opts.d["width"]]);
                        opts[opts.d["width"]] = opts.items.visible * opts.items[opts.d["width"]];
                        if (!opts.items.visibleConf.adjust) opts.align = false
                    }
                    if (opts.items.visible == "Infinity" || opts.items.visible < 1) {
                        debug(true, 'Not a valid number of visible items: Set to "variable".');
                        opts.items.visibleConf.variable = true
                    }
                }
            }
            if (!opts[opts.d["width"]]) {
                opts[opts.d["width"]] = "variable";
                if (!opts.responsive && opts.items.filter == "*" && !opts.items.visibleConf.variable && opts.items[opts.d["width"]] != "variable") {
                    opts[opts.d["width"]] = opts.items.visible * opts.items[opts.d["width"]];
                    opts.align = false
                }
            }
            if (opts.items.visibleConf.variable) {
                opts.maxDimention = opts[opts.d["width"]] == "variable" ? ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth") : opts[opts.d["width"]];
                if (opts.align === false) {
                    opts[opts.d["width"]] = "variable"
                }
                opts.items.visible = gn_getVisibleItemsNext(k, opts, 0)
            } else if (opts.items.filter != "*") {
                opts.items.visibleConf.org = opts.items.visible;
                opts.items.visible = gn_getVisibleItemsNextFilter(k, opts, 0)
            }
            if (typeof opts.align == "undefined") {
                opts.align = opts[opts.d["width"]] == "variable" ? false : "center"
            }
            opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0);
            opts.items.visibleConf.old = opts.items.visible;
            opts.usePadding = false;
            if (opts.responsive) {
                if (!opts.items.visibleConf.min) opts.items.visibleConf.min = opts.items.visible;
                if (!opts.items.visibleConf.max) opts.items.visibleConf.max = opts.items.visible;
                opts.align = false;
                opts.padding = [0, 0, 0, 0];
                var m = $wrp.is(":visible");
                if (m) $wrp.hide();
                var n = ms_getPercentage(ms_getTrueInnerSize($wrp.parent(), opts, "innerWidth"), opts[opts.d["width"]]);
                if (typeof opts[opts.d["width"]] == "number" && n < opts[opts.d["width"]]) {
                    n = opts[opts.d["width"]]
                }
                if (m) $wrp.show();
                var o = cf_getItemAdjustMinMax(Math.ceil(n / opts.items[opts.d["width"]]), opts.items.visibleConf);
                if (o > k.length) {
                    o = k.length
                }
                var p = Math.floor(n / o), q = opts[opts.d["height"]], r = ms_isPercentage(q);
                k.each(function () {
                    var a = $(this), b = p - ms_getPaddingBorderMargin(a, opts, "Width");
                    a[opts.d["width"]](b);
                    if (r) {
                        a[opts.d["height"]](ms_getPercentage(b, q))
                    }
                });
                opts.items.visible = o;
                opts.items[opts.d["width"]] = p;
                opts[opts.d["width"]] = o * p
            } else {
                opts.padding = cf_getPadding(opts.padding);
                if (opts.align == "top") opts.align = "left";
                if (opts.align == "bottom") opts.align = "right";
                switch (opts.align) {
                    case "center":
                    case "left":
                    case "right":
                        if (opts[opts.d["width"]] != "variable") {
                            var s = cf_getAlignPadding(gi_getCurrentItems(k, opts), opts);
                            opts.usePadding = true;
                            opts.padding[opts.d[1]] = s[1];
                            opts.padding[opts.d[3]] = s[0]
                        }
                        break;
                    default:
                        opts.align = false;
                        opts.usePadding = opts.padding[0] == 0 && opts.padding[1] == 0 && opts.padding[2] == 0 && opts.padding[3] == 0 ? false : true;
                        break
                }
            }
            if (typeof opts.cookie == "boolean" && opts.cookie) opts.cookie = "caroufredsel_cookie_" + $cfs.attr("id");
            if (typeof opts.items.minimum != "number") opts.items.minimum = opts.items.visible;
            if (typeof opts.scroll.duration != "number") opts.scroll.duration = 500;
            if (typeof opts.scroll.items == "undefined") opts.scroll.items = opts.items.visibleConf.variable || opts.items.filter != "*" ? "visible" : opts.items.visible;
            opts.auto = go_getNaviObject($tt0, opts.auto, "auto");
            opts.prev = go_getNaviObject($tt0, opts.prev);
            opts.next = go_getNaviObject($tt0, opts.next);
            opts.pagination = go_getNaviObject($tt0, opts.pagination, "pagination");
            opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
            opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
            opts.next = $.extend(true, {}, opts.scroll, opts.next);
            opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
            if (typeof opts.pagination.keys != "boolean") opts.pagination.keys = false;
            if (typeof opts.pagination.anchorBuilder != "function" && opts.pagination.anchorBuilder !== false) opts.pagination.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
            if (typeof opts.auto.play != "boolean") opts.auto.play = true;
            if (typeof opts.auto.delay != "number") opts.auto.delay = 0;
            if (typeof opts.auto.pauseOnEvent == "undefined") opts.auto.pauseOnEvent = true;
            if (typeof opts.auto.pauseOnResize != "boolean") opts.auto.pauseOnResize = true;
            if (typeof opts.auto.pauseDuration != "number") opts.auto.pauseDuration = opts.auto.duration < 10 ? 2500 : opts.auto.duration * 5;
            if (opts.synchronise) {
                opts.synchronise = cf_getSynchArr(opts.synchronise)
            }
            if (conf.debug) {
                debug(conf, "Carousel width: " + opts.width);
                debug(conf, "Carousel height: " + opts.height);
                if (opts.maxDimention) debug(conf, "Available " + opts.d["width"] + ": " + opts.maxDimention);
                debug(conf, "Item widths: " + opts.items.width);
                debug(conf, "Item heights: " + opts.items.height);
                debug(conf, "Number of items visible: " + opts.items.visible);
                if (opts.auto.play) debug(conf, "Number of items scrolled automatically: " + opts.auto.items);
                if (opts.prev.button) debug(conf, "Number of items scrolled backward: " + opts.prev.items);
                if (opts.next.button) debug(conf, "Number of items scrolled forward: " + opts.next.items)
            }
        };
        $cfs._cfs_build = function () {
            $cfs.data("cfs_isCarousel", true);
            var a = {
                textAlign: $cfs.css("textAlign"),
                "float": $cfs.css("float"),
                position: $cfs.css("position"),
                top: $cfs.css("top"),
                right: $cfs.css("right"),
                bottom: $cfs.css("bottom"),
                left: $cfs.css("left"),
                width: $cfs.css("width"),
                height: $cfs.css("height"),
                marginTop: $cfs.css("marginTop"),
                marginRight: $cfs.css("marginRight"),
                marginBottom: $cfs.css("marginBottom"),
                marginLeft: $cfs.css("marginLeft")
            };
            switch (a.position) {
                case "absolute":
                    var b = "absolute";
                    break;
                case "fixed":
                    var b = "fixed";
                    break;
                default:
                    var b = "relative"
            }
            $wrp.css(a).css({overflow: "hidden", position: b});
            $cfs.data("cfs_origCss", a).css({
                textAlign: "left",
                "float": "none",
                position: "absolute",
                top: 0,
                left: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            });
            if (opts.usePadding) {
                $cfs.children().each(function () {
                    var a = parseInt($(this).css(opts.d["marginRight"]));
                    if (isNaN(a)) a = 0;
                    $(this).data("cfs_origCssMargin", a)
                })
            }
        };
        $cfs._cfs_bind_events = function () {
            $cfs._cfs_unbind_events();
            $cfs.bind(cf_e("stop", conf), function (a, b) {
                a.stopPropagation();
                if (!crsl.isStopped) {
                    if (opts.auto.button) {
                        opts.auto.button.addClass(cf_c("stopped", conf))
                    }
                }
                crsl.isStopped = true;
                if (opts.auto.play) {
                    opts.auto.play = false;
                    $cfs.trigger(cf_e("pause", conf), b)
                }
                return true
            });
            $cfs.bind(cf_e("finish", conf), function (a) {
                a.stopPropagation();
                if (crsl.isScrolling) {
                    sc_stopScroll(scrl)
                }
                return true
            });
            $cfs.bind(cf_e("pause", conf), function (a, b, c) {
                a.stopPropagation();
                tmrs = sc_clearTimers(tmrs);
                if (b && crsl.isScrolling) {
                    scrl.isStopped = true;
                    var d = getTime() - scrl.startTime;
                    scrl.duration -= d;
                    if (scrl.pre) scrl.pre.duration -= d;
                    if (scrl.post) scrl.post.duration -= d;
                    sc_stopScroll(scrl, false)
                }
                if (!crsl.isPaused && !crsl.isScrolling) {
                    if (c) tmrs.timePassed += getTime() - tmrs.startTime
                }
                if (!crsl.isPaused) {
                    if (opts.auto.button) {
                        opts.auto.button.addClass(cf_c("paused", conf))
                    }
                }
                crsl.isPaused = true;
                if (opts.auto.onPausePause) {
                    var e = opts.auto.pauseDuration - tmrs.timePassed, f = 100 - Math.ceil(e * 100 / opts.auto.pauseDuration);
                    opts.auto.onPausePause.call($tt0, f, e)
                }
                return true
            });
            $cfs.bind(cf_e("play", conf), function (a, b, c, d) {
                a.stopPropagation();
                tmrs = sc_clearTimers(tmrs);
                var e = [b, c, d], f = ["string", "number", "boolean"], g = cf_sortParams(e, f);
                var b = g[0], c = g[1], d = g[2];
                if (b != "prev" && b != "next") b = crsl.direction;
                if (typeof c != "number") c = 0;
                if (typeof d != "boolean") d = false;
                if (d) {
                    crsl.isStopped = false;
                    opts.auto.play = true
                }
                if (!opts.auto.play) {
                    a.stopImmediatePropagation();
                    return debug(conf, "Carousel stopped: Not scrolling.")
                }
                if (crsl.isPaused) {
                    if (opts.auto.button) {
                        opts.auto.button.removeClass(cf_c("stopped", conf));
                        opts.auto.button.removeClass(cf_c("paused", conf))
                    }
                }
                crsl.isPaused = false;
                tmrs.startTime = getTime();
                var h = opts.auto.pauseDuration + c;
                dur2 = h - tmrs.timePassed;
                perc = 100 - Math.ceil(dur2 * 100 / h);
                tmrs.auto = setTimeout(function () {
                    if (opts.auto.onPauseEnd) {
                        opts.auto.onPauseEnd.call($tt0, perc, dur2)
                    }
                    if (crsl.isScrolling) {
                        $cfs.trigger(cf_e("play", conf), b)
                    } else {
                        $cfs.trigger(cf_e(b, conf), opts.auto)
                    }
                }, dur2);
                if (opts.auto.onPauseStart) {
                    opts.auto.onPauseStart.call($tt0, perc, dur2)
                }
                return true
            });
            $cfs.bind(cf_e("resume", conf), function (a) {
                a.stopPropagation();
                if (scrl.isStopped) {
                    scrl.isStopped = false;
                    crsl.isPaused = false;
                    crsl.isScrolling = true;
                    scrl.startTime = getTime();
                    sc_startScroll(scrl)
                } else {
                    $cfs.trigger(cf_e("play", conf))
                }
                return true
            });
            $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function (a, b, c, d) {
                a.stopPropagation();
                if (crsl.isStopped || $cfs.is(":hidden")) {
                    a.stopImmediatePropagation();
                    return debug(conf, "Carousel stopped or hidden: Not scrolling.")
                }
                if (opts.items.minimum >= itms.total) {
                    a.stopImmediatePropagation();
                    return debug(conf, "Not enough items (" + itms.total + ", " + opts.items.minimum + " needed): Not scrolling.")
                }
                var e = [b, c, d], f = ["object", "number/string", "function"], g = cf_sortParams(e, f);
                var b = g[0], c = g[1], d = g[2];
                var h = a.type.slice(conf.events.prefix.length);
                if (typeof b != "object" || b == null) b = opts[h];
                if (typeof d == "function") b.onAfter = d;
                if (typeof c != "number") {
                    if (opts.items.filter != "*") {
                        c = "visible"
                    } else {
                        var i = [c, b.items, opts[h].items];
                        for (var g = 0, j = i.length; g < j; g++) {
                            if (typeof i[g] == "number" || i[g] == "page" || i[g] == "visible") {
                                c = i[g];
                                break
                            }
                        }
                    }
                    switch (c) {
                        case "page":
                            a.stopImmediatePropagation();
                            return $cfs.triggerHandler(h + "Page", [b, d]);
                            break;
                        case "visible":
                            if (!opts.items.visibleConf.variable && opts.items.filter == "*") {
                                c = opts.items.visible
                            }
                            break
                    }
                }
                if (scrl.isStopped) {
                    $cfs.trigger(cf_e("resume", conf));
                    $cfs.trigger(cf_e("queue", conf), [h, [b, c, d]]);
                    a.stopImmediatePropagation();
                    return debug(conf, "Carousel resumed scrolling.")
                }
                if (b.duration > 0) {
                    if (crsl.isScrolling) {
                        if (b.queue) $cfs.trigger(cf_e("queue", conf), [h, [b, c, d]]);
                        a.stopImmediatePropagation();
                        return debug(conf, "Carousel currently scrolling.")
                    }
                }
                if (b.conditions && !b.conditions.call($tt0)) {
                    a.stopImmediatePropagation();
                    return debug(conf, 'Callback "conditions" returned false.')
                }
                tmrs.timePassed = 0;
                $cfs.trigger("_cfs_slide_" + h, [b, c]);
                if (opts.synchronise) {
                    var k = opts.synchronise, l = [b, c];
                    for (var m = 0, j = k.length; m < j; m++) {
                        var n = h;
                        if (!k[m][1]) l[0] = k[m][0].triggerHandler("_cfs_configuration", h);
                        if (!k[m][2]) n = n == "prev" ? "next" : "prev";
                        l[1] = c + k[m][3];
                        k[m][0].trigger("_cfs_slide_" + n, l)
                    }
                }
                return true
            });
            $cfs.bind(cf_e("_cfs_slide_prev", conf, false), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular) {
                    if (itms.first == 0) {
                        if (opts.infinite) {
                            $cfs.trigger(cf_e("next", conf), itms.total - 1)
                        }
                        return a.stopImmediatePropagation()
                    }
                }
                if (opts.usePadding) sz_resetMargin(d, opts);
                if (typeof c != "number") {
                    if (opts.items.visibleConf.variable) {
                        c = gn_getVisibleItemsPrev(d, opts, itms.total - 1)
                    } else if (opts.items.filter != "*") {
                        var e = typeof b.items == "number" ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
                    } else {
                        c = opts.items.visible
                    }
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                if (!opts.circular) {
                    if (itms.total - c < itms.first) {
                        c = itms.total - itms.first
                    }
                }
                opts.items.visibleConf.old = opts.items.visible;
                if (opts.items.visibleConf.variable) {
                    var f = gn_getVisibleItemsNext(d, opts, itms.total - c);
                    if (opts.items.visible + c <= f && c < itms.total) {
                        c++;
                        f = gn_getVisibleItemsNext(d, opts, itms.total - c)
                    }
                    opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                } else if (opts.items.filter != "*") {
                    var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
                    opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (opts.usePadding) sz_resetMargin(d, opts, true);
                if (c == 0) {
                    a.stopImmediatePropagation();
                    return debug(conf, "0 items to scroll: Not scrolling.")
                }
                debug(conf, "Scrolling " + c + " items backward.");
                itms.first += c;
                while (itms.first >= itms.total) {
                    itms.first -= itms.total
                }
                if (!opts.circular) {
                    if (itms.first == 0 && b.onEnd) b.onEnd.call($tt0);
                    if (!opts.infinite) nv_enableNavi(opts, itms.first, conf)
                }
                $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs);
                if (itms.total < opts.items.visible + c) {
                    $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(true).appendTo($cfs)
                }
                var d = $cfs.children(), g = gi_getOldItemsPrev(d, opts, c), h = gi_getNewItemsPrev(d, opts), i = d.eq(c - 1), j = g.last(), k = h.last();
                if (opts.usePadding) sz_resetMargin(d, opts);
                if (opts.align) {
                    var l = cf_getAlignPadding(h, opts), m = l[0], n = l[1]
                } else {
                    var m = 0, n = 0
                }
                var o = m < 0 ? opts.padding[opts.d[3]] : 0;
                if (b.fx == "directscroll" && opts.items.visible < c) {
                    var p = d.slice(opts.items.visibleConf.old, c), q = opts.items[opts.d["width"]];
                    p.each(function () {
                        var a = $(this);
                        a.data("isHidden", a.is(":hidden")).hide()
                    });
                    opts.items[opts.d["width"]] = "variable"
                } else {
                    var p = false
                }
                var r = ms_getTotalSize(d.slice(0, c), opts, "width"), s = cf_mapWrapperSizes(ms_getSizes(h, opts, true), opts, !opts.usePadding);
                if (p) opts.items[opts.d["width"]] = q;
                if (opts.usePadding) {
                    sz_resetMargin(d, opts, true);
                    if (n >= 0) {
                        sz_resetMargin(j, opts, opts.padding[opts.d[1]])
                    }
                    sz_resetMargin(i, opts, opts.padding[opts.d[3]])
                }
                if (opts.align) {
                    opts.padding[opts.d[1]] = n;
                    opts.padding[opts.d[3]] = m
                }
                var t = {}, u = b.duration;
                if (b.fx == "none") u = 0; else if (u == "auto") u = opts.scroll.duration / opts.scroll.items * c; else if (u <= 0) u = 0; else if (u < 10) u = r / u;
                scrl = sc_setScroll(u, b.easing);
                if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
                    scrl.anims.push([$wrp, s])
                }
                if (opts.usePadding) {
                    var v = opts.padding[opts.d[3]];
                    if (k.not(i).length) {
                        var w = {};
                        w[opts.d["marginRight"]] = i.data("cfs_origCssMargin");
                        if (m < 0) i.css(w); else scrl.anims.push([i, w])
                    }
                    if (k.not(j).length) {
                        var x = {};
                        x[opts.d["marginRight"]] = j.data("cfs_origCssMargin");
                        scrl.anims.push([j, x])
                    }
                    if (n >= 0) {
                        var y = {};
                        y[opts.d["marginRight"]] = k.data("cfs_origCssMargin") + opts.padding[opts.d[1]];
                        scrl.anims.push([k, y])
                    }
                } else {
                    var v = 0
                }
                t[opts.d["left"]] = v;
                var z = [g, h, s, u];
                if (b.onBefore) b.onBefore.apply($tt0, z);
                clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, z);
                switch (b.fx) {
                    case "fade":
                    case "crossfade":
                    case "cover":
                    case "uncover":
                        scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
                        scrl.post = sc_setScroll(scrl.duration, scrl.easing);
                        scrl.duration = 0;
                        break
                }
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "uncover":
                        var A = $cfs.clone().appendTo($wrp);
                        break
                }
                switch (b.fx) {
                    case "uncover":
                        A.children().slice(0, c).remove();
                    case "crossfade":
                    case "cover":
                        A.children().slice(opts.items.visible).remove();
                        break
                }
                switch (b.fx) {
                    case "fade":
                        scrl.pre.anims.push([$cfs, {opacity: 0}]);
                        break;
                    case "crossfade":
                        A.css({opacity: 0});
                        scrl.pre.anims.push([$cfs, {width: "+=0"}, function () {
                            A.remove()
                        }]);
                        scrl.post.anims.push([A, {opacity: 1}]);
                        break;
                    case "cover":
                        scrl = fx_cover(scrl, $cfs, A, opts, true);
                        break;
                    case "uncover":
                        scrl = fx_uncover(scrl, $cfs, A, opts, true, c);
                        break
                }
                var B = function () {
                    var a = opts.items.visible + c - itms.total;
                    if (a > 0) {
                        $cfs.children().slice(itms.total).remove();
                        g = $($cfs.children().slice(itms.total - (opts.items.visible - a)).get().concat($cfs.children().slice(0, a).get()))
                    }
                    if (p) {
                        p.each(function () {
                            var a = $(this);
                            if (!a.data("isHidden")) a.show()
                        })
                    }
                    if (opts.usePadding) {
                        var d = $cfs.children().eq(opts.items.visible + c - 1);
                        d.css(opts.d["marginRight"], d.data("cfs_origCssMargin"))
                    }
                    scrl.anims = [];
                    if (scrl.pre) scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing);
                    var e = function () {
                        switch (b.fx) {
                            case "fade":
                            case "crossfade":
                                $cfs.css("filter", "");
                                break
                        }
                        scrl.post = sc_setScroll(0, null);
                        crsl.isScrolling = false;
                        var a = [g, h, s];
                        if (b.onAfter) b.onAfter.apply($tt0, a);
                        clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, a);
                        if (queu.length) {
                            $cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
                            queu.shift()
                        }
                        if (!crsl.isPaused) $cfs.trigger(cf_e("play", conf))
                    };
                    switch (b.fx) {
                        case "fade":
                            scrl.pre.anims.push([$cfs, {opacity: 1}, e]);
                            sc_startScroll(scrl.pre);
                            break;
                        case "uncover":
                            scrl.pre.anims.push([$cfs, {width: "+=0"}, e]);
                            sc_startScroll(scrl.pre);
                            break;
                        default:
                            e();
                            break
                    }
                };
                scrl.anims.push([$cfs, t, B]);
                crsl.isScrolling = true;
                $cfs.css(opts.d["left"], -(r - o));
                tmrs = sc_clearTimers(tmrs);
                sc_startScroll(scrl);
                cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e("currentPosition", conf)));
                $cfs.trigger(cf_e("updatePageStatus", conf), [false, s]);
                return true
            });
            $cfs.bind(cf_e("_cfs_slide_next", conf, false), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.children();
                if (!opts.circular) {
                    if (itms.first == opts.items.visible) {
                        if (opts.infinite) {
                            $cfs.trigger(cf_e("prev", conf), itms.total - 1)
                        }
                        return a.stopImmediatePropagation()
                    }
                }
                if (opts.usePadding) sz_resetMargin(d, opts);
                if (typeof c != "number") {
                    if (opts.items.filter != "*") {
                        var e = typeof b.items == "number" ? b.items : gn_getVisibleOrg($cfs, opts);
                        c = gn_getScrollItemsNextFilter(d, opts, 0, e)
                    } else {
                        c = opts.items.visible
                    }
                    c = cf_getAdjust(c, opts, b.items, $tt0)
                }
                var f = itms.first == 0 ? itms.total : itms.first;
                if (!opts.circular) {
                    if (opts.items.visibleConf.variable) {
                        var g = gn_getVisibleItemsNext(d, opts, c), e = gn_getVisibleItemsPrev(d, opts, f - 1)
                    } else {
                        var g = opts.items.visible, e = opts.items.visible
                    }
                    if (c + g > f) {
                        c = f - e
                    }
                }
                opts.items.visibleConf.old = opts.items.visible;
                if (opts.items.visibleConf.variable) {
                    var g = gn_getVisibleItemsNextTestCircular(d, opts, c, f);
                    while (opts.items.visible - c >= g && c < itms.total) {
                        c++;
                        g = gn_getVisibleItemsNextTestCircular(d, opts, c, f)
                    }
                    opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                } else if (opts.items.filter != "*") {
                    var g = gn_getVisibleItemsNextFilter(d, opts, c);
                    opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
                }
                if (opts.usePadding) sz_resetMargin(d, opts, true);
                if (c == 0) {
                    a.stopImmediatePropagation();
                    return debug(conf, "0 items to scroll: Not scrolling.")
                }
                debug(conf, "Scrolling " + c + " items forward.");
                itms.first -= c;
                while (itms.first < 0) {
                    itms.first += itms.total
                }
                if (!opts.circular) {
                    if (itms.first == opts.items.visible && b.onEnd) b.onEnd.call($tt0);
                    if (!opts.infinite) nv_enableNavi(opts, itms.first, conf)
                }
                if (itms.total < opts.items.visible + c) {
                    $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(true).appendTo($cfs)
                }
                var d = $cfs.children(), h = gi_getOldItemsNext(d, opts), i = gi_getNewItemsNext(d, opts, c), j = d.eq(c - 1), k = h.last(), l = i.last();
                if (opts.usePadding) sz_resetMargin(d, opts);
                if (opts.align) {
                    var m = cf_getAlignPadding(i, opts), n = m[0], o = m[1]
                } else {
                    var n = 0, o = 0
                }
                if (b.fx == "directscroll" && opts.items.visibleConf.old < c) {
                    var p = d.slice(opts.items.visibleConf.old, c), q = opts.items[opts.d["width"]];
                    p.each(function () {
                        var a = $(this);
                        a.data("isHidden", a.is(":hidden")).hide()
                    });
                    opts.items[opts.d["width"]] = "variable"
                } else {
                    var p = false
                }
                var r = ms_getTotalSize(d.slice(0, c), opts, "width"), s = cf_mapWrapperSizes(ms_getSizes(i, opts, true), opts, !opts.usePadding);
                if (p) opts.items[opts.d["width"]] = q;
                if (opts.align) {
                    if (opts.padding[opts.d[1]] < 0) {
                        opts.padding[opts.d[1]] = 0
                    }
                }
                if (opts.usePadding) {
                    sz_resetMargin(d, opts, true);
                    sz_resetMargin(k, opts, opts.padding[opts.d[1]])
                }
                if (opts.align) {
                    opts.padding[opts.d[1]] = o;
                    opts.padding[opts.d[3]] = n
                }
                var t = {}, u = b.duration;
                if (b.fx == "none") u = 0; else if (u == "auto") u = opts.scroll.duration / opts.scroll.items * c; else if (u <= 0) u = 0; else if (u < 10) u = r / u;
                scrl = sc_setScroll(u, b.easing);
                if (opts[opts.d["width"]] == "variable" || opts[opts.d["height"]] == "variable") {
                    scrl.anims.push([$wrp, s])
                }
                if (opts.usePadding) {
                    var v = l.data("cfs_origCssMargin");
                    if (o >= 0) {
                        v += opts.padding[opts.d[1]]
                    }
                    l.css(opts.d["marginRight"], v);
                    if (j.not(k).length) {
                        var w = {};
                        w[opts.d["marginRight"]] = k.data("cfs_origCssMargin");
                        scrl.anims.push([k, w])
                    }
                    var x = j.data("cfs_origCssMargin");
                    if (n >= 0) {
                        x += opts.padding[opts.d[3]]
                    }
                    var y = {};
                    y[opts.d["marginRight"]] = x;
                    scrl.anims.push([j, y])
                }
                t[opts.d["left"]] = -r;
                if (n < 0) {
                    t[opts.d["left"]] += n
                }
                var z = [h, i, s, u];
                if (b.onBefore) b.onBefore.apply($tt0, z);
                clbk.onBefore = sc_callCallbacks(clbk.onBefore, $tt0, z);
                switch (b.fx) {
                    case "fade":
                    case "crossfade":
                    case "cover":
                    case "uncover":
                        scrl.pre = sc_setScroll(scrl.duration, scrl.easing);
                        scrl.post = sc_setScroll(scrl.duration, scrl.easing);
                        scrl.duration = 0;
                        break
                }
                switch (b.fx) {
                    case "crossfade":
                    case "cover":
                    case "uncover":
                        var A = $cfs.clone().appendTo($wrp);
                        break
                }
                switch (b.fx) {
                    case "uncover":
                        A.children().slice(opts.items.visibleConf.old).remove();
                        break;
                    case "crossfade":
                    case "cover":
                        A.children().slice(0, c).remove();
                        A.children().slice(opts.items.visible).remove();
                        break
                }
                switch (b.fx) {
                    case "fade":
                        scrl.pre.anims.push([$cfs, {opacity: 0}]);
                        break;
                    case "crossfade":
                        A.css({opacity: 0});
                        scrl.pre.anims.push([$cfs, {width: "+=0"}, function () {
                            A.remove()
                        }]);
                        scrl.post.anims.push([A, {opacity: 1}]);
                        break;
                    case "cover":
                        scrl = fx_cover(scrl, $cfs, A, opts, false);
                        break;
                    case "uncover":
                        scrl = fx_uncover(scrl, $cfs, A, opts, false, c);
                        break
                }
                var B = function () {
                    var a = opts.items.visible + c - itms.total, e = opts.usePadding ? opts.padding[opts.d[3]] : 0;
                    $cfs.css(opts.d["left"], e);
                    if (a > 0) {
                        $cfs.children().slice(itms.total).remove()
                    }
                    var f = $cfs.children().slice(0, c).appendTo($cfs).last();
                    if (a > 0) {
                        i = gi_getCurrentItems(d, opts)
                    }
                    if (p) {
                        p.each(function () {
                            var a = $(this);
                            if (!a.data("isHidden")) a.show()
                        })
                    }
                    if (opts.usePadding) {
                        if (itms.total < opts.items.visible + c) {
                            var g = $cfs.children().eq(opts.items.visible - 1);
                            g.css(opts.d["marginRight"], g.data("cfs_origCssMargin") + opts.padding[opts.d[3]])
                        }
                        f.css(opts.d["marginRight"], f.data("cfs_origCssMargin"))
                    }
                    scrl.anims = [];
                    if (scrl.pre) scrl.pre = sc_setScroll(scrl.orgDuration, scrl.easing);
                    var j = function () {
                        switch (b.fx) {
                            case "fade":
                            case "crossfade":
                                $cfs.css("filter", "");
                                break
                        }
                        scrl.post = sc_setScroll(0, null);
                        crsl.isScrolling = false;
                        var a = [h, i, s];
                        if (b.onAfter) b.onAfter.apply($tt0, a);
                        clbk.onAfter = sc_callCallbacks(clbk.onAfter, $tt0, a);
                        if (queu.length) {
                            $cfs.trigger(cf_e(queu[0][0], conf), queu[0][1]);
                            queu.shift()
                        }
                        if (!crsl.isPaused) $cfs.trigger(cf_e("play", conf))
                    };
                    switch (b.fx) {
                        case "fade":
                            scrl.pre.anims.push([$cfs, {opacity: 1}, j]);
                            sc_startScroll(scrl.pre);
                            break;
                        case "uncover":
                            scrl.pre.anims.push([$cfs, {width: "+=0"}, j]);
                            sc_startScroll(scrl.pre);
                            break;
                        default:
                            j();
                            break
                    }
                };
                scrl.anims.push([$cfs, t, B]);
                crsl.isScrolling = true;
                tmrs = sc_clearTimers(tmrs);
                sc_startScroll(scrl);
                cf_setCookie(opts.cookie, $cfs.triggerHandler(cf_e("currentPosition", conf)));
                $cfs.trigger(cf_e("updatePageStatus", conf), [false, s]);
                return true
            });
            $cfs.bind(cf_e("slideTo", conf), function (a, b, c, d, e, f, g) {
                a.stopPropagation();
                var h = [b, c, d, e, f, g], i = ["string/number/object", "number", "boolean", "object", "string", "function"], j = cf_sortParams(h, i);
                var e = j[3], f = j[4], g = j[5];
                b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs);
                if (b == 0) return;
                if (typeof e != "object") e = false;
                if (crsl.isScrolling) {
                    if (typeof e != "object" || e.duration > 0) return false
                }
                if (f != "prev" && f != "next") {
                    if (opts.circular) {
                        if (b <= itms.total / 2) f = "next"; else f = "prev"
                    } else {
                        if (itms.first == 0 || itms.first > b) f = "next"; else f = "prev"
                    }
                }
                if (f == "prev") b = itms.total - b;
                $cfs.trigger(cf_e(f, conf), [e, b, g]);
                return true
            });
            $cfs.bind(cf_e("prevPage", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
            });
            $cfs.bind(cf_e("nextPage", conf), function (a, b, c) {
                a.stopPropagation();
                var d = $cfs.triggerHandler(cf_e("currentPage", conf));
                return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
            });
            $cfs.bind(cf_e("slideToPage", conf), function (a, b, c, d, e) {
                a.stopPropagation();
                if (typeof b != "number") b = $cfs.triggerHandler(cf_e("currentPage", conf));
                var f = opts.pagination.items || opts.items.visible, g = Math.ceil(itms.total / f) - 1;
                if (b < 0) b = g;
                if (b > g) b = 0;
                return $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, true, c, d, e])
            });
            $cfs.bind(cf_e("jumpToStart", conf), function (a, b) {
                a.stopPropagation();
                if (b) b = gn_getItemIndex(b, 0, true, itms, $cfs); else b = 0;
                b += itms.first;
                if (b != 0) {
                    while (b > itms.total) b -= itms.total;
                    $cfs.prepend($cfs.children().slice(b, itms.total))
                }
                return true
            });
            $cfs.bind(cf_e("synchronise", conf), function (a, b) {
                a.stopPropagation();
                if (b) b = cf_getSynchArr(b); else if (opts.synchronise) b = opts.synchronise; else return debug(conf, "No carousel to synchronise.");
                var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = true;
                for (var e = 0, f = b.length; e < f; e++) {
                    if (!b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], true])) {
                        d = false
                    }
                }
                return d
            });
            $cfs.bind(cf_e("queue", conf), function (a, b, c) {
                a.stopPropagation();
                if (typeof b == "function") {
                    b.call($tt0, queu)
                } else if (is_array(b)) {
                    queu = b
                } else if (typeof b != "undefined") {
                    queu.push([b, c])
                }
                return queu
            });
            $cfs.bind(cf_e("insertItem", conf), function (a, b, c, d, e) {
                a.stopPropagation();
                var f = [b, c, d, e], g = ["string/object", "string/number/object", "boolean", "number"], h = cf_sortParams(f, g);
                var b = h[0], c = h[1], d = h[2], e = h[3];
                if (typeof b == "object" && typeof b.jquery == "undefined") b = $(b);
                if (typeof b == "string") b = $(b);
                if (typeof b != "object" || typeof b.jquery == "undefined" || b.length == 0) return debug(conf, "Not a valid object.");
                if (typeof c == "undefined") c = "end";
                if (opts.usePadding) {
                    b.each(function () {
                        var a = parseInt($(this).css(opts.d["marginRight"]));
                        if (isNaN(a)) a = 0;
                        $(this).data("cfs_origCssMargin", a)
                    })
                }
                var i = c, j = "before";
                if (c == "end") {
                    if (d) {
                        if (itms.first == 0) {
                            c = itms.total - 1;
                            j = "after"
                        } else {
                            c = itms.first;
                            itms.first += b.length
                        }
                        if (c < 0) c = 0
                    } else {
                        c = itms.total - 1;
                        j = "after"
                    }
                } else {
                    c = gn_getItemIndex(c, e, d, itms, $cfs)
                }
                if (i != "end" && !d) {
                    if (c < itms.first) itms.first += b.length
                }
                if (itms.first >= itms.total) itms.first -= itms.total;
                var k = $cfs.children().eq(c);
                if (k.length) {
                    k[j](b)
                } else {
                    $cfs.append(b)
                }
                itms.total = $cfs.children().length;
                var l = $cfs.triggerHandler("updateSizes");
                nv_showNavi(opts, itms.total, conf);
                nv_enableNavi(opts, itms.first, conf);
                $cfs.trigger(cf_e("linkAnchors", conf));
                $cfs.trigger(cf_e("updatePageStatus", conf), [true, l]);
                return true
            });
            $cfs.bind(cf_e("removeItem", conf), function (a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d], f = ["string/number/object", "boolean", "number"], g = cf_sortParams(e, f);
                var b = g[0], c = g[1], d = g[2];
                if (typeof b == "undefined" || b == "end") {
                    $cfs.children().last().remove()
                } else {
                    b = gn_getItemIndex(b, d, c, itms, $cfs);
                    var h = $cfs.children().eq(b);
                    if (h.length) {
                        if (b < itms.first) itms.first -= h.length;
                        h.remove()
                    }
                }
                itms.total = $cfs.children().length;
                var i = $cfs.triggerHandler("updateSizes");
                nv_showNavi(opts, itms.total, conf);
                nv_enableNavi(opts, itms.first, conf);
                $cfs.trigger(cf_e("updatePageStatus", conf), [true, i]);
                return true
            });
            $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function (a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                if (is_array(b)) clbk[c] = b;
                if (typeof b == "function") clbk[c].push(b);
                return clbk[c]
            });
            $cfs.bind(cf_e("_cfs_currentPosition", conf, false), function (a, b) {
                a.stopPropagation();
                return $cfs.triggerHandler(cf_e("currentPosition", conf), b)
            });
            $cfs.bind(cf_e("currentPosition", conf), function (a, b) {
                a.stopPropagation();
                if (itms.first == 0) var c = 0; else var c = itms.total - itms.first;
                if (typeof b == "function") b.call($tt0, c);
                return c
            });
            $cfs.bind(cf_e("currentPage", conf), function (a, b) {
                a.stopPropagation();
                var c = opts.pagination.items || opts.items.visible;
                var d = Math.ceil(itms.total / c - 1);
                if (itms.first == 0) var e = 0; else if (itms.first < itms.total % c) var e = 0; else if (itms.first == c && !opts.circular) var e = d; else var e = Math.round((itms.total - itms.first) / c);
                if (e < 0) e = 0;
                if (e > d) e = d;
                if (typeof b == "function") b.call($tt0, e);
                return e
            });
            $cfs.bind(cf_e("currentVisible", conf), function (a, b) {
                a.stopPropagation();
                $i = gi_getCurrentItems($cfs.children(), opts);
                if (typeof b == "function") b.call($tt0, $i);
                return $i
            });
            $cfs.bind(cf_e("slice", conf), function (a, b, c, d) {
                a.stopPropagation();
                var e = [b, c, d], f = ["number", "number", "function"], g = cf_sortParams(e, f);
                b = typeof g[0] == "number" ? g[0] : 0, c = typeof g[1] == "number" ? g[1] : itms.total, d = g[2];
                b += itms.first;
                c += itms.first;
                while (b > itms.total) {
                    b -= itms.total
                }
                while (c > itms.total) {
                    c -= itms.total
                }
                while (b < 0) {
                    b += itms.total
                }
                while (c < 0) {
                    c += itms.total
                }
                var h = $cfs.children();
                if (c > b) {
                    var i = h.slice(b, c)
                } else {
                    var i = $(h.slice(b, itms.total).get().concat(h.slice(0, c).get()))
                }
                if (typeof d == "function") d.call($tt0, i);
                return i
            });
            $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function (a, b) {
                a.stopPropagation();
                var c = a.type.slice(conf.events.prefix.length);
                if (typeof b == "function") b.call($tt0, crsl[c]);
                return crsl[c]
            });
            $cfs.bind(cf_e("_cfs_configuration", conf, false), function (a, b, c, d) {
                a.stopPropagation();
                return $cfs.triggerHandler(cf_e("configuration", conf), [b, c, d])
            });
            $cfs.bind(cf_e("configuration", conf), function (e, a, b, c) {
                e.stopPropagation();
                var reInit = false;
                if (typeof a == "function") {
                    a.call($tt0, opts)
                } else if (typeof a == "object") {
                    opts_orig = $.extend(true, {}, opts_orig, a);
                    if (b !== false) reInit = true; else opts = $.extend(true, {}, opts, a)
                } else if (typeof a != "undefined") {
                    if (typeof b == "function") {
                        var val = eval("opts." + a);
                        if (typeof val == "undefined") val = "";
                        b.call($tt0, val)
                    } else if (typeof b != "undefined") {
                        if (typeof c !== "boolean") c = true;
                        eval("opts_orig." + a + " = b");
                        if (c !== false) reInit = true; else eval("opts." + a + " = b")
                    } else {
                        return eval("opts." + a)
                    }
                }
                if (reInit) {
                    sz_resetMargin($cfs.children(), opts);
                    $cfs._cfs_init(opts_orig);
                    $cfs._cfs_bind_buttons();
                    var siz = sz_setSizes($cfs, opts, false);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz])
                }
                return opts
            });
            $cfs.bind(cf_e("linkAnchors", conf), function (a, b, c) {
                a.stopPropagation();
                if (typeof b == "undefined" || b.length == 0) b = $("body"); else if (typeof b == "string") b = $(b);
                if (typeof b != "object") return debug(conf, "Not a valid object.");
                if (typeof c != "string" || c.length == 0) c = "a.caroufredsel";
                b.find(c).each(function () {
                    var a = this.hash || "";
                    if (a.length > 0 && $cfs.children().index($(a)) != -1) {
                        $(this).unbind("click").click(function (b) {
                            b.preventDefault();
                            $cfs.trigger(cf_e("slideTo", conf), a)
                        })
                    }
                });
                return true
            });
            $cfs.bind(cf_e("updatePageStatus", conf), function (a, b, c) {
                a.stopPropagation();
                if (!opts.pagination.container) return;
                if (b) {
                    var d = opts.pagination.items || opts.items.visible, e = Math.ceil(itms.total / d);
                    if (opts.pagination.anchorBuilder) {
                        opts.pagination.container.children().remove();
                        opts.pagination.container.each(function () {
                            for (var a = 0; a < e; a++) {
                                var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, true, itms, $cfs));
                                $(this).append(opts.pagination.anchorBuilder(a + 1, b))
                            }
                        })
                    }
                    opts.pagination.container.each(function () {
                        $(this).children().unbind(opts.pagination.event).each(function (a) {
                            $(this).bind(opts.pagination.event, function (b) {
                                b.preventDefault();
                                $cfs.trigger(cf_e("slideTo", conf), [a * d, 0, true, opts.pagination])
                            })
                        })
                    })
                }
                opts.pagination.container.each(function () {
                    $(this).children().removeClass(cf_c("selected", conf)).eq($cfs.triggerHandler(cf_e("currentPage", conf))).addClass(cf_c("selected", conf))
                });
                return true
            });
            $cfs.bind(cf_e("updateSizes", conf), function (a) {
                var b = $cfs.children(), c = opts.items.visible;
                if (opts.items.visibleConf.variable) c = gn_getVisibleItemsNext(b, opts, 0); else if (opts.items.filter != "*") c = gn_getVisibleItemsNextFilter(b, opts, 0);
                if (!opts.circular && itms.first != 0 && c > itms.first) {
                    if (opts.items.visibleConf.variable) {
                        var d = gn_getVisibleItemsPrev(b, opts, itms.first) - itms.first
                    } else if (opts.items.filter != "*") {
                        var d = gn_getVisibleItemsPrevFilter(b, opts, itms.first) - itms.first
                    } else {
                        d = opts.items.visible - itms.first
                    }
                    debug(conf, "Preventing non-circular: sliding " + d + " items backward.");
                    $cfs.trigger("prev", d)
                }
                opts.items.visible = cf_getItemsAdjust(c, opts, opts.items.visibleConf.adjust, $tt0);
                return sz_setSizes($cfs, opts)
            });
            $cfs.bind(cf_e("_cfs_destroy", conf, false), function (a, b) {
                a.stopPropagation();
                $cfs.trigger(cf_e("destroy", conf), b);
                return true
            });
            $cfs.bind(cf_e("destroy", conf), function (a, b) {
                a.stopPropagation();
                tmrs = sc_clearTimers(tmrs);
                $cfs.data("cfs_isCarousel", false);
                $cfs.trigger(cf_e("finish", conf));
                if (b) {
                    $cfs.trigger(cf_e("jumpToStart", conf))
                }
                if (opts.usePadding) {
                    sz_resetMargin($cfs.children(), opts)
                }
                $cfs.css($cfs.data("cfs_origCss"));
                $cfs._cfs_unbind_events();
                $cfs._cfs_unbind_buttons();
                $wrp.replaceWith($cfs);
                return true
            })
        };
        $cfs._cfs_unbind_events = function () {
            $cfs.unbind(cf_e("", conf));
            $cfs.unbind(cf_e("", conf, false))
        };
        $cfs._cfs_bind_buttons = function () {
            $cfs._cfs_unbind_buttons();
            nv_showNavi(opts, itms.total, conf);
            nv_enableNavi(opts, itms.first, conf);
            if (opts.auto.pauseOnHover) {
                var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
                $wrp.bind(cf_e("mouseenter", conf, false), function () {
                    $cfs.trigger(cf_e("pause", conf), a)
                }).bind(cf_e("mouseleave", conf, false), function () {
                    $cfs.trigger(cf_e("resume", conf))
                })
            }
            if (opts.auto.button) {
                opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function (a) {
                    a.preventDefault();
                    var b = false, c = null;
                    if (crsl.isPaused) {
                        b = "play"
                    } else if (opts.auto.pauseOnEvent) {
                        b = "pause";
                        c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)
                    }
                    if (b) {
                        $cfs.trigger(cf_e(b, conf), c)
                    }
                })
            }
            if (opts.prev.button) {
                opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function (a) {
                    a.preventDefault();
                    $cfs.trigger(cf_e("prev", conf))
                });
                if (opts.prev.pauseOnHover) {
                    var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
                    opts.prev.button.bind(cf_e("mouseenter", conf, false), function () {
                        $cfs.trigger(cf_e("pause", conf), a)
                    }).bind(cf_e("mouseleave", conf, false), function () {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
            }
            if (opts.next.button) {
                opts.next.button.bind(cf_e(opts.next.event, conf, false), function (a) {
                    a.preventDefault();
                    $cfs.trigger(cf_e("next", conf))
                });
                if (opts.next.pauseOnHover) {
                    var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
                    opts.next.button.bind(cf_e("mouseenter", conf, false), function () {
                        $cfs.trigger(cf_e("pause", conf), a)
                    }).bind(cf_e("mouseleave", conf, false), function () {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
            }
            if ($.fn.mousewheel) {
                if (opts.prev.mousewheel) {
                    if (!crsl.mousewheelPrev) {
                        crsl.mousewheelPrev = true;
                        $wrp.mousewheel(function (a, b) {
                            if (b > 0) {
                                a.preventDefault();
                                var c = bt_mousesheelNumber(opts.prev.mousewheel);
                                $cfs.trigger(cf_e("prev", conf), c)
                            }
                        })
                    }
                }
                if (opts.next.mousewheel) {
                    if (!crsl.mousewheelNext) {
                        crsl.mousewheelNext = true;
                        $wrp.mousewheel(function (a, b) {
                            if (b < 0) {
                                a.preventDefault();
                                var c = bt_mousesheelNumber(opts.next.mousewheel);
                                $cfs.trigger(cf_e("next", conf), c)
                            }
                        })
                    }
                }
            }
            if ($.fn.touchwipe) {
                var b = opts.prev.wipe ? function () {
                    $cfs.trigger(cf_e("prev", conf))
                } : null, c = opts.next.wipe ? function () {
                    $cfs.trigger(cf_e("next", conf))
                } : null;
                if (c || c) {
                    if (!crsl.touchwipe) {
                        crsl.touchwipe = true;
                        var d = {min_move_x: 30, min_move_y: 30, preventDefaultEvents: true};
                        switch (opts.direction) {
                            case "up":
                            case "down":
                                d.wipeUp = b;
                                d.wipeDown = c;
                                break;
                            default:
                                d.wipeLeft = c;
                                d.wipeRight = b
                        }
                        $wrp.touchwipe(d)
                    }
                }
            }
            if (opts.pagination.container) {
                if (opts.pagination.pauseOnHover) {
                    var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
                    opts.pagination.container.bind(cf_e("mouseenter", conf, false), function () {
                        $cfs.trigger(cf_e("pause", conf), a)
                    }).bind(cf_e("mouseleave", conf, false), function () {
                        $cfs.trigger(cf_e("resume", conf))
                    })
                }
            }
            if (opts.prev.key || opts.next.key) {
                $(document).bind(cf_e("keyup", conf, false, true, true), function (a) {
                    var b = a.keyCode;
                    if (b == opts.next.key) {
                        a.preventDefault();
                        $cfs.trigger(cf_e("next", conf))
                    }
                    if (b == opts.prev.key) {
                        a.preventDefault();
                        $cfs.trigger(cf_e("prev", conf))
                    }
                })
            }
            if (opts.pagination.keys) {
                $(document).bind(cf_e("keyup", conf, false, true, true), function (a) {
                    var b = a.keyCode;
                    if (b >= 49 && b < 58) {
                        b = (b - 49) * opts.items.visible;
                        if (b <= itms.total) {
                            a.preventDefault();
                            $cfs.trigger(cf_e("slideTo", conf), [b, 0, true, opts.pagination])
                        }
                    }
                })
            }
            if (opts.auto.play) {
                $cfs.trigger(cf_e("play", conf), opts.auto.delay)
            }
            if (crsl.upDateOnWindowResize) {
                $(window).bind(cf_e("resize", conf, false, true, true), function (a) {
                    $cfs.trigger(cf_e("finish", conf));
                    if (opts.auto.pauseOnResize && !crsl.isPaused) {
                        $cfs.trigger(cf_e("play", conf))
                    }
                    sz_resetMargin($cfs.children(), opts);
                    $cfs._cfs_init(opts_orig);
                    var b = sz_setSizes($cfs, opts, false);
                    $cfs.trigger(cf_e("updatePageStatus", conf), [true, b])
                })
            }
        };
        $cfs._cfs_unbind_buttons = function () {
            var a = cf_e("", conf), b = cf_e("", conf, false);
            ns3 = cf_e("", conf, false, true, true);
            $(document).unbind(ns3);
            $(window).unbind(ns3);
            $wrp.unbind(b);
            if (opts.auto.button) opts.auto.button.unbind(b);
            if (opts.prev.button) opts.prev.button.unbind(b);
            if (opts.next.button) opts.next.button.unbind(b);
            if (opts.pagination.container) {
                opts.pagination.container.unbind(b);
                if (opts.pagination.anchorBuilder) {
                    opts.pagination.container.children().remove()
                }
            }
            nv_showNavi(opts, "hide", conf);
            nv_enableNavi(opts, "removeClass", conf)
        };
        var crsl = {
            direction: "next",
            isPaused: true,
            isScrolling: false,
            isStopped: false,
            mousewheelNext: false,
            mousewheelPrev: false,
            touchwipe: false
        }, itms = {total: $cfs.children().length, first: 0}, tmrs = {
            timer: null,
            auto: null,
            queue: null,
            startTime: getTime(),
            timePassed: 0
        }, scrl = {isStopped: false, duration: 0, startTime: 0, easing: "", anims: []}, clbk = {
            onBefore: [],
            onAfter: []
        }, queu = [], conf = $.extend(true, {}, $.fn.carouFredSel.configs, configs), opts = {}, opts_orig = options, $wrp = $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '">').parent();
        conf.selector = $cfs.selector;
        conf.serialNumber = $.fn.carouFredSel.serialNumber++;
        $cfs._cfs_init(opts_orig, true, starting_position);
        $cfs._cfs_build();
        $cfs._cfs_bind_events();
        $cfs._cfs_bind_buttons();
        if (is_array(opts.items.start)) {
            var start_arr = opts.items.start
        } else {
            var start_arr = [];
            if (opts.items.start != 0) {
                start_arr.push(opts.items.start)
            }
        }
        if (opts.cookie) {
            start_arr.unshift(cf_readCookie(opts.cookie))
        }
        if (start_arr.length > 0) {
            for (var a = 0, l = start_arr.length; a < l; a++) {
                var s = start_arr[a];
                if (s == 0) {
                    continue
                }
                if (s === true) {
                    s = window.location.hash;
                    if (s.length < 1) {
                        continue
                    }
                } else if (s === "random") {
                    s = Math.floor(Math.random() * itms.total)
                }
                if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, true, {fx: "none"}])) {
                    break
                }
            }
        }
        var siz = sz_setSizes($cfs, opts, false), itm = gi_getCurrentItems($cfs.children(), opts);
        if (opts.onCreate) {
            opts.onCreate.call($tt0, itm, siz)
        }
        $cfs.trigger(cf_e("updatePageStatus", conf), [true, siz]);
        $cfs.trigger(cf_e("linkAnchors", conf));
        return $cfs
    };
    $.fn.carouFredSel.serialNumber = 1;
    $.fn.carouFredSel.defaults = {
        synchronise: false,
        infinite: true,
        circular: true,
        responsive: false,
        direction: "left",
        items: {start: 0},
        scroll: {
            easing: "swing",
            duration: 500,
            pauseOnHover: false,
            mousewheel: false,
            wipe: false,
            event: "click",
            queue: false
        }
    };
    $.fn.carouFredSel.configs = {
        debug: false,
        events: {prefix: "", namespace: "cfs"},
        wrapper: {element: "div", classname: "caroufredsel_wrapper"},
        classnames: {}
    };
    $.fn.carouFredSel.pageAnchorBuilder = function (a, b) {
        return '<a href="#"><span>' + a + "</span></a>"
    };
    $.fn.caroufredsel = function (a, b) {
        return this.carouFredSel(a, b)
    };
    $.extend($.easing, {
        quadratic: function (a) {
            var b = a * a;
            return a * (-b * a + 4 * b - 6 * a + 4)
        }, cubic: function (a) {
            return a * (4 * a * a - 9 * a + 6)
        }, elastic: function (a) {
            var b = a * a;
            return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
        }
    })
})(jQuery);
(function (a, b, c) {
    a.fn.responsiveSlides = function (d) {
        var e = a.extend({
            auto: true,
            speed: 1e3,
            timeout: 4e3,
            pager: false,
            nav: false,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "none",
            controls: "",
            namespace: "rslides"
        }, d);
        return this.each(function () {
            c++;
            var f = a(this), g, h, j, k, l, m = 0, n = f.children(), o = n.size(), p = parseFloat(e.speed), q = e.namespace, r = q + c, s = q + " " + r, t = q + "_nav " + r + "_nav", u = q + "_here", v = r + "_on", w = r + "_s", x = a(".mytabs"), y = {
                "float": "left",
                position: "relative"
            }, z = {"float": "none", position: "absolute"}, A = function (b) {
                f.trigger(q + "-before");
                n.stop().fadeOut(p, function () {
                    a(this).removeClass(v).css(z)
                }).eq(b).fadeIn(p, function () {
                    a(this).addClass(v).css(y).trigger(q + "-after");
                    m = b
                })
            };
            if (n.size() > 1) {
                n.each(function (a) {
                    this.id = w + a
                });
                f.css("max-width", e.maxwidth).addClass(s);
                n.hide().eq(0).addClass(v).css(y).show();
                if (e.pager === true) {
                    var B = [];
                    n.each(function (a) {
                        var b = a + 1;
                        B += "<li>" + "<a href='#' class='" + w + b + "'>" + b + "</a>" + "</li>"
                    });
                    l = x.find("a");
                    if (d.controls) {
                        a(e.controls).append(x)
                    } else {
                        f.after(x)
                    }
                    g = function (a) {
                        l.closest("li").removeClass(u).eq(a).addClass(u)
                    }
                }
                if (e.auto === true) {
                    h = function () {
                        k = setInterval(function () {
                            var a = m + 1 < o ? m + 1 : 0;
                            if (e.pager === true) {
                                g(a)
                            }
                            A(a)
                        }, parseFloat(e.timeout))
                    };
                    h()
                }
                j = function () {
                    if (e.auto === true) {
                        clearInterval(k);
                        h()
                    }
                };
                if (e.pager === true) {
                    l.bind("click", function (b) {
                        b.preventDefault();
                        j();
                        var c = l.index(this);
                        if (m === c || a("." + v + ":animated").length) {
                            return
                        }
                        g(c);
                        A(c)
                    }).eq(0).closest("li").addClass(u)
                }
            }
            if (e.nav === true) {
                var C = "<a href='#' class='" + t + " prev'>" + e.prevText + "</a>" + "<a href='#' class='" + t + " next'>" + e.nextText + "</a>";
                if (d.controls) {
                    a(e.controls).append(C)
                } else {
                    f.after(C)
                }
                var D = a("." + r + "_nav"), E = false;
                D.bind("click", function (b) {
                    b.preventDefault();
                    if (a(this).hasClass("prev")) E = true; else E = false;
                    if (a("." + v + ":animated").length) {
                        return
                    }
                    var c = n.index(a("." + v)), d = c - 1, f = c + 1 < o ? m + 1 : 0;
                    A(E ? d : f);
                    if (e.pager === true) {
                        g(E ? d : f)
                    }
                    j()
                })
            }
            if (typeof document.body.style.maxWidth === "undefined" && d && d.maxwidth) {
                var F = function () {
                    f.css("width", "100%");
                    if (f.width() > parseFloat(e.maxwidth)) {
                        f.css("width", parseFloat(e.maxwidth))
                    }
                };
                F();
                a(b).bind("resize", function () {
                    F()
                })
            }
        })
    }
})(jQuery, this, 0)