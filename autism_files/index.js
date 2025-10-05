let $ = jQuery;

$(document).ready(function () {
  let interval = false;
  const addScrollingToSection = (slider) => {
    let isDown = false,
      startX,
      scrollLeft,
      velX;

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      // Store the previous scroll position
      var prevScrollLeft = slider.scrollLeft;
      slider.scrollLeft = scrollLeft - walk;
      // Compare change in position to work out drag speed
      velX = slider.scrollLeft - prevScrollLeft;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
      beginMomentumTracking(); // Start a frame loop to continue drag momentum
    });

    var momentumID;

    function beginMomentumTracking() {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
      cancelAnimationFrame(momentumID);
    }

    function momentumLoop() {
      slider.scrollLeft += velX; // Apply the velocity to the scroll position
      velX *= 0.95; // Slow the velocity slightly
      if (Math.abs(velX) > 0.5) {
        // Still moving?
        momentumID = requestAnimationFrame(momentumLoop); // Keep looping
      }
    }

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      cancelMomentumTracking(); // Stop the drag momentum loop
    });

    // Listen for mouse wheel events
    slider.addEventListener("wheel", (e) => {
      cancelMomentumTracking(); // Stop the drag momentum loop
    });
  };

  const mainPageHeroDisplay = () => {
    if ($(window).width() <= 1085 && $(window).width() > 800) {
      if (interval !== false) {
        clearInterval(interval);
        interval = false;
      }
      interval = setInterval(function () {
        let position = $(".section-pagrindinis1 .opacity-background").data(
          "position"
        );
        if (position === 1 || position === undefined) {
          let image = $(".section-pagrindinis1 .grid a:nth-of-type(2)").data(
            "attr-img"
          );
          $(".section-pagrindinis1 .opacity-background").css("left", "33.333%");
          $(".section-pagrindinis1 .opacity-background").data("position", 2);
          $(".section-pagrindinis1 .main-section").css(
            "backgroundImage",
            `url(${image})`
          );
        }
        if (position === 2) {
          let image = $(".section-pagrindinis1 .grid a:nth-of-type(3)").data(
            "attr-img"
          );
          $(".section-pagrindinis1 .opacity-background").css("left", "66.666%");
          $(".section-pagrindinis1 .opacity-background").data("position", 3);
          $(".section-pagrindinis1 .main-section").css(
            "backgroundImage",
            `url(${image})`
          );
        }
        if (position === 3) {
          let image = $(".section-pagrindinis1 .grid a:nth-of-type(1)").data(
            "attr-img"
          );
          $(".section-pagrindinis1 .opacity-background").css("left", "0");
          $(".section-pagrindinis1 .opacity-background").data("position", 1);
          $(".section-pagrindinis1 .main-section").css(
            "backgroundImage",
            `url(${image})`
          );
        }
      }, 2000);
      $(".section-pagrindinis1 .grid .block").addClass("no-image");
    } else if ($(window).width() > 1085) {
      clearInterval(interval);
      $(".section-pagrindinis1 .grid .block").addClass("no-image");
    }
  };

  mainPageHeroDisplay();

  if (
    $(".section-pagrindinis2").length > 0 ||
    $(".section-pagrindinis1").length > 0
  ) {
    $(window).on("resize", function () {
      mainPageHeroDisplay();
      $(".section-pagrindinis2 .different-articles").slick("resize");
      if ($(window).width() <= 800) {
        $(".section-pagrindinis1 .grid").not(".slick-initialized").slick({
          slidesToShow: 1,
          autoplay: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
          fade: true,
        });
        $(".section-pagrindinis1 .grid").slick("resize");
        $(".section-pagrindinis1 .grid .block").removeClass("no-image");
      } else {
        $(".section-pagrindinis1 .grid")
          .filter(".slick-initialized")
          .slick("unslick");
      }
    });

    if ($(window).width() <= 800) {
      $(".section-pagrindinis1 .grid").slick({
        slidesToShow: 1,
        autoplay: true,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        fade: true,
      });
      $(".section-pagrindinis1 .grid .block").removeClass("no-image");
    }

    $(".section-pagrindinis2 .different-articles").slick({
      slidesToShow: 4,
      infinite: true,
      autoplay: false,
      prevArrow: $(".section-pagrindinis2 .arrow-left"),
      nextArrow: $(".section-pagrindinis2 .arrow-right"),
      responsive: [
        {
          breakpoint: 1085,
          settings: {
            slidesToShow: 3.5,
            infinite: false,
            autoplay: false,
          },
        },
        {
          breakpoint: 900,
          settings: "unslick",
        },
      ],
    });
  }

  if ($(".section-singlepost-more .articles").length > 0) {
    $(".section-singlepost-more .articles").slick({
      slidesToShow: 4,
      infinite: true,
      autoplay: false,
      prevArrow: $(".section-pagrindinis2 .arrow-left"),
      nextArrow: $(".section-pagrindinis2 .arrow-right"),
      responsive: [
        {
          breakpoint: 1085,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  //Changing opacity background location and image on hover

  $(".section-pagrindinis1 .first-block").on("mouseover", function () {
    let image = $(this).data("attr-img");
    $(".section-pagrindinis1 .opacity-background").css("left", "0");
    $(".section-pagrindinis1 .main-section").css(
      "backgroundImage",
      `url(${image})`
    );
  });

  $(".section-pagrindinis1 .second-block").on("mouseover", function () {
    let image = $(this).data("attr-img");
    $(".section-pagrindinis1 .opacity-background").css("left", "33.333%");
    $(".section-pagrindinis1 .main-section").css(
      "backgroundImage",
      `url(${image})`
    );
  });

  $(".section-pagrindinis1 .third-block").on("mouseover", function () {
    let image = $(this).data("attr-img");
    $(".section-pagrindinis1 .opacity-background").css("left", "66.666%");
    $(".section-pagrindinis1 .main-section").css(
      "backgroundImage",
      `url(${image})`
    );
  });

  $(document).on("scroll", function () {
    if ($(document).scrollTop() >= 1) {
      $("nav").addClass("nav-sticky-enabled");
    } else {
      $("nav").removeClass("nav-sticky-enabled");
    }
  });

  let navHeight = $("nav").height();
  let footerHeight = $("footer").height();
  $(".section-404").css(
    "min-height",
    `calc(70vh - ${navHeight}px - ${footerHeight}px)`
  );
  $(".section-page").css(
    "min-height",
    `calc(100vh - ${navHeight}px - ${footerHeight}px)`
  );
  $(".section-category").css(
    "min-height",
    `calc(100vh - ${navHeight}px - ${footerHeight}px)`
  );
  $(".section-search-container").css(
    "min-height",
    `calc(100vh - ${navHeight}px - ${footerHeight}px)`
  );

  $(
    ".section-contact .input-container input, .section-contact .input-container textarea"
  ).on("focus", function () {
    $(this).parent().addClass("focus-input");
    $(this).parent().addClass("different-border");
  });

  $(
    ".section-contact .input-container input, .section-contact .input-container textarea"
  ).on("blur", function () {
    $(this).parent().removeClass("different-border");
    if ($(this).val().length === 0) {
      $(this).parent().removeClass("focus-input");
    } else {
      $(this).parent().removeClass("invalid-input");
    }
  });

  if ($(".section-contact").length > 0) {
    $(".section-contact form").validate({
      invalidHandler: function (form, validator) {
        let invalidInputs = validator.errorList;
        invalidInputs.forEach((input) => {
          $(input.element).parent().addClass("invalid-input");
        });
      },
      messages: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      errorPlacement: $.noop,
    });

    $(".section-contact textarea").niceScroll();

    $(".section-contact form").on("submit", function (e) {
      e.preventDefault();

      if ($(this).valid()) {
        grecaptcha.ready(function () {
          // do request for recaptcha token
          // response is promise with passed token
          grecaptcha
            .execute("6LdpcwgrAAAAAErSnEOF5GV4eziJJ_GYlCTUQmv8", {
              action: "send_contact_email",
            })
            .then(function (token) {
              // add token to form
              $(".section-contact form").prepend(
                '<input type="hidden" name="g-recaptcha-response" id="form-captcha" value="' +
                  token +
                  '">'
              );
              let fd = new FormData($(".section-contact form")[0]);
              fd.append("captcha", $("#form-captcha").val());
              fd.append("action", "send_email");
              $.ajax({
                url: variables.ajaxUrl,
                data: fd,
                processData: false,
                contentType: false,
                type: "POST",
                beforeSend: function () {
                  $(".section-loader").fadeIn();
                },
                success: function (data) {
                  $(".section-loader").fadeOut();
                  if (data === "sent") {
                    Toastify({
                      text: "Your message has been sent!",
                      className: "toast-success",
                      duration: 3000,
                    }).showToast();
                    $(".section-contact button").text(variables.message_sent);
                    $(".section-contact button").addClass("sent-message");
                  } else {
                    Toastify({
                      text: "An error has occurred, please try again later",
                      className: "toast-error",
                      duration: 5000,
                    }).showToast();
                  }
                },
              });
            });
        });
      }
    });
  }

  $("nav .search").on("click", function () {
    let searchContainer = $("nav .search-container");
    searchContainer.slideToggle();
    if (searchContainer.css("display") === "block") {
      setTimeout(function () {
        searchContainer.children("form").find("input").focus();
      }, 200);
    }
  });

  $("nav .close-search").on("click", function () {
    $("nav .search-container").slideToggle();
  });

  $(".go-back-button").on("click", function () {
    window.history.back();
  });

  $("nav .languages .active").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("nav .inactive-languages").slideToggle();
    $(this).toggleClass("active-language");

    $(document).on("click", function (e) {
      e.stopPropagation();
      let container = $("nav .languages .inactive-languages");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("nav .inactive-languages").slideUp();
        $("nav .languages .active").removeClass("active-language");
      }
    });
  });

  $(".checkbox-container input").on("click", function () {
    if ($(this).attr("checked") == undefined) {
      $(this).attr("checked", "checked");
    } else {
      $(this).attr("checked");
    }
    $(this).parent().toggleClass("active-input");
  });

  $(".section-singlepost .comments form").on("submit", function () {
    let formIsValid = true,
      form = $(".section-singlepost .comments form"),
      email = form.find(".comment-form-email"),
      name = form.find("#author"),
      comment = form.find("#comment");

    if (email.length > 0) {
      if (!isEmail($(".section-singlepost .real-email-input").val())) {
        formIsValid = false;
      }

      if (name.val() === "") {
        formIsValid = false;
      }

      if (comment.val() === "") {
        formIsValid = false;
      }
    }

    if (formIsValid) {
      $(".section-loader").fadeIn();
    }
  });

  if ($(".section-singlepost .comments form").length > 0) {
    $(".section-singlepost .comments form").ajaxForm(function () {
      let formIsValid = true,
        form = $(".section-singlepost .comments form"),
        email = form.find(".comment-form-email"),
        name = form.find("#author"),
        comment = form.find("#comment");

      if (email.length > 0) {
        if (!isEmail($(".section-singlepost .real-email-input").val())) {
          formIsValid = false;
        }

        if (name.val() === "") {
          formIsValid = false;
        }

        if (comment.val() === "") {
          formIsValid = false;
        }
      }

      if (formIsValid) {
        let role = $("#to-comments").data("role");

        if (role == 1) {
          location.reload();
        } else {
          $(".section-loader").fadeOut();
          $("#respond")
            .children()
            .fadeOut("slow")
            .promise()
            .done(function () {
              $("#respond .comment-success").fadeIn().css("display", "flex");
            });
        }
      }
    });
  }

  if ($(".section-singlepost .comments form .comment-form-email").length > 0) {
    $(".section-singlepost .comments form").validate({
      submitHandler: function (form) {
        if (isEmail($(".section-singlepost .real-email-input").val())) {
          form.submit();
        } else {
          $(".section-singlepost .real-email-input").addClass("invalid-input");
        }
      },
      invalidHandler: function (form, validator) {
        let invalidInputs = validator.errorList;
        invalidInputs.forEach((input) => {
          $(input.element).addClass("invalid-input");
        });
      },
      messages: {
        author: "",
        email: "",
        comment: "",
      },
      errorPlacement: $.noop,
    });
  }
  $(".section-singlepost form .real-input").on("input", function () {
    $(this).removeClass("invalid-input");
  });

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $(".section-singlepost .form-submit .scroll-to-top").on("click", function () {
    window.scrollTo(0, 0);
  });

  $("nav .hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $("nav .darken-container").toggleClass("show-tablet-nav");
  });

  $("nav .close-tablet-nav").on("click", function () {
    $("nav .darken-container").removeClass("show-tablet-nav");
    $("nav .hamburger").removeClass("is-active");
  });

  $("nav .darken-container").on("click", function (e) {
    let container = $("nav .darken-container .wrapper");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(this).removeClass("show-tablet-nav");
      $("nav .hamburger").removeClass("is-active");
    }
  });

  $("footer .mobile-headers").on("click", function () {
    $(this).siblings(".mobile-menu").slideToggle();
    $(this).toggleClass("shown-menu");
  });

  $(".section-reviews-cat1 button").on("click", function () {
    let fd = new FormData();
    let offset = $(this).data("offset");
    let termId = $(this).data("termid");
    let postsToShow = $(this).data("show");
    let totalPosts = $(this).data("total");
    fd.append("offset", offset);
    fd.append("termId", termId);
    fd.append("posts_to_show", postsToShow);
    fd.append("total_posts", totalPosts);
    fd.append("action", "load_more_reviews");
    $.ajax({
      url: variables.ajaxUrl,
      data: fd,
      processData: false,
      contentType: false,
      type: "POST",
      beforeSend: function () {
        $(".section-loader").fadeIn();
      },
      success: function (data) {
        $(".section-loader").fadeOut();
        $(".section-reviews-cat1 .wrapper2").append(data);
        let button = $(".section-reviews-cat1 button");
        offset = offset + postsToShow;
        button.data("offset", offset);
        if (offset >= totalPosts) {
          $(".section-reviews-cat1 .button-container").hide();
        }
      },
    });
  });

  $(".section-singlepost .load-more").on("click", function () {
    let offset = $(this).data("offset");
    let total_comments = $(this).data("total");
    let id = $(this).data("id");
    let fd = new FormData();
    fd.append("offset", offset);
    fd.append("id", id);
    fd.append("action", "load_more_comments");
    $.ajax({
      url: variables.ajaxUrl,
      data: fd,
      processData: false,
      contentType: false,
      type: "POST",
      beforeSend: function () {
        $(".section-loader").fadeIn();
      },
      success: function (data) {
        $(".section-loader").fadeOut();
        $(".section-singlepost .load-more").data("offset", offset + 3);
        $(".section-singlepost .post-comments").append(data);
        if (total_comments - offset <= 0) {
          $(".section-singlepost .load-more").hide();
        } else {
          $(".section-singlepost .load-more").text(
            `${variables.show_more_comments} (${total_comments - offset})`
          );
        }
      },
    });
  });

  $(document).on("click", ".section-singlepost .show-more", function () {
    let amount = $(this).data("amount");
    let parent = $(this).parent().parent();

    if ($(this).data("load") == true) {
      $(this).data("load", false);
      let comment_id = $(this).data("comment-id");
      let post_id = $(this).data("postid");
      let fd = new FormData();
      fd.append("id", comment_id);
      fd.append("post_id", post_id);
      fd.append("action", "load_replies");
      $.ajax({
        url: variables.ajaxUrl,
        data: fd,
        processData: false,
        contentType: false,
        type: "POST",
        beforeSend: function () {
          $(".section-loader").fadeIn();
        },
        success: function (data) {
          $(".section-loader").fadeOut();
          parent.append(data);
        },
      });
    }

    if ($(this).data("show") == true) {
      $(this).data("show", false);
      $(this).text(`${variables.hide_comments} (${amount})`);
      $(this).parent().siblings(".children").removeClass("hide-comment");
    } else {
      $(this).data("show", true);
      $(this).text(`${variables.more_comments} (${amount})`);
      $(this).parent().siblings(".children").addClass("hide-comment");
    }
  });

  $("nav .tablet-nav .header").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("arrow-right");
  });

  $(".section-singlepost .section-page__content--references2 > p").on(
    "click",
    function () {
      $(
        ".section-singlepost .section-page__content--references2 ol"
      ).slideToggle();
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).find(".minus-img").addClass("img-active");
        $(this).find(".plus-img").removeClass("img-active");
      } else {
        $(this).find(".plus-img").addClass("img-active");
        $(this).find(".minus-img").removeClass("img-active");
      }
    }
  );

  if (window.location.hash) {
    scrollToSection(window.location.hash);
  }

  function scrollToSection(id) {
    let minus = 0;
    if ($(".section-quizv3").length > 0) {
      minus = $(".section-quizv3").outerHeight();
    }
    $("html, body").animate(
      {
        scrollTop:
          $(id).offset().top - $("nav").outerHeight() - minus - 20 + "px",
      },
      500
    );
  }

  let element = $(".section-quizv2");
  if (element.length > 0) {
    let commentSection = document.querySelector(
      ".section-singlepost .comments"
    );

    let observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.addClass("section-quiz--active");
          let height = element.height() + 40;
          $("body").css("paddingBottom", height);
        } else if (entry.boundingClientRect.top < 0) {
          element.addClass("section-quiz--active");
          let height = element.height() + 40;
          $("body").css("paddingBottom", height);
        } else {
          element.removeClass("section-quiz--active");
          $("body").css("paddingBottom", "0");
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    observer.observe(commentSection);
  }

  $(".section-bmr-calculator .metric-button").on("click", function () {
    $(".section-bmr-calculator .imperial-button").removeClass("active");
    $(this).addClass("active");
    $(".section-bmr-calculator .grid-container").show();
    $(".section-bmr-calculator .grid2-container").hide();
  });

  $(".section-bmr-calculator .imperial-button").on("click", function () {
    $(".section-bmr-calculator .metric-button").removeClass("active");
    $(this).addClass("active");
    $(".section-bmr-calculator .grid-container").hide();
    $(".section-bmr-calculator .grid2-container").show();
  });

  $("nav .search-container form").on("submit", function () {
    $("nav .search-container").slideUp();
  });

  $(".section-bmr-calculator .calculate-button").on("click", function () {
    let bmr;
    if ($(".section-bmr-calculator .metric-button").hasClass("active")) {
      let height = $(".section-bmr-calculator #height").val();
      let weight = $(".section-bmr-calculator #weight").val();
      let age = $(".section-bmr-calculator #age").val();
      let gender = $(".section-bmr-calculator #gender").val();
      let exercise = $(".section-bmr-calculator #activity").val();
      if (gender == "male") {
        bmr = 66.5 + 13.76 * weight + 5.003 * height - 6.755 * age;
      } else {
        bmr = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }
      let result = bmr.toFixed(2);
      let tdee = (result * exercise).toFixed(2);
      $(".section-bmr-calculator .bmr-rating").text(result);
      $(".section-bmr-calculator .tdee-rating").text(tdee);
      $(".section-bmr-calculator .results-container").slideDown();
    } else {
      let height_ft = $(".section-bmr-calculator #height_ft").val();
      let height_in = $(".section-bmr-calculator #height_in").val();
      let height = height_ft + height_in;
      let weight = $(".section-bmr-calculator #weight_2").val();
      let age = $(".section-bmr-calculator #age_2").val();
      let gender = $(".section-bmr-calculator #gender_2").val();
      let exercise = $(".section-bmr-calculator #activity_2").val();
      if (gender == "male") {
        bmr = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      } else {
        bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age;
      }
      let result = bmr.toFixed(2);
      let tdee = (result * exercise).toFixed(2);
      $(".section-bmr-calculator .bmr-rating").text(result);
      $(".section-bmr-calculator .tdee-rating").text(tdee);
      $(".section-bmr-calculator .results-container").slideDown();
    }
  });

  let comparison_tables = document.querySelectorAll(".real-comparison-table");

  comparison_tables.forEach((item) => {
    let informationRowHeight = $(item)
      .next()
      .find(".js-height-container")
      .outerHeight();

    let simpleBar = new SimpleBar(item);
    addScrollingToSection($(item).find(".simplebar-content-wrapper")[0]);
    simpleBar.getScrollElement().addEventListener("scroll", function () {
      $(this).find(".scroll-hint").fadeOut(100);
    });

    $(item).find(
      ".js-min-height"
    )[0].style.minHeight = `${informationRowHeight}px`;
  });

  $(".lwptoc a").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top - 80 + "px",
      },
      100
    );
  });

  if ($(".section-singlepost").length > 0) {
    if ($(".section-singlepost .change-order .author").width() > 854) {
      $(".seperator--mobiled").hide();
    }
  }

  let friendlyUrls = atob(variables.friendly_urls);
  let real_utm_source;

  function checkForExistingSource() {
    let params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    if (params.utm_source) {
      if (params.utm_source.startsWith("healthguardian")) {
        return params.utm_source;
      }
      return `healthguardian-${params.utm_source}`;
    } else {
      if (params.fbclid) {
        return "healthguardian-facebook";
      }
      return false;
    }
  }

  function getUtmSource() {
    let storedUtm = sessionStorage.getItem("utm-source");
    if (storedUtm) {
      real_utm_source = storedUtm;
      return storedUtm;
    }

    let utm_source_exists = checkForExistingSource();
    if (utm_source_exists) {
      sessionStorage.setItem("utm-source", utm_source_exists);
      real_utm_source = utm_source_exists;
      return utm_source_exists;
    }

    let utm_source;
    if (document.referrer == "") {
      utm_source = "healthguardian-direct";
    } else {
      let url = new URL(document.referrer);
      let exploded = url.hostname.split(".");

      if (exploded.length === 2) {
        return exploded[0];
      }

      if (exploded[0].toLowerCase() === "www") {
        exploded.shift();
      }

      exploded.pop();
      if (
        exploded[exploded.length - 1] &&
        exploded[exploded.length - 1] === "co"
      ) {
        exploded.pop();
      }

      if (exploded.length >= 2) {
        exploded.shift();
      }

      if (exploded.length >= 2) {
        exploded.shift();
      }

      utm_source = `healthguardian-${String(exploded)}`;
    }

    real_utm_source = utm_source;

    sessionStorage.setItem("utm-source", utm_source);
    return utm_source;
  }

  function checkForExistingMedium() {
    let params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });

    return [params.utm_medium, params.referral];
  }

  function getUtmMedium() {
    let storedUtm = sessionStorage.getItem("utm-medium");
    let utm_medium = "";
    if (storedUtm || storedUtm == "") {
      return storedUtm;
    }

    let utm_medium_exists = checkForExistingMedium();
    if (utm_medium_exists[0]) {
      if (utm_medium_exists[0] === "organic") {
        utm_medium_exists[0] = "referral";
      }
      sessionStorage.setItem("utm-medium", utm_medium_exists[0]);
      return utm_medium_exists[0];
    } else if (utm_medium_exists[1]) {
      if (utm_medium_exists[1] === "organic") {
        utm_medium_exists[1] = "referral";
      }
      sessionStorage.setItem("utm-medium", utm_medium_exists[1]);
      return utm_medium_exists[1];
    } else {
      let utm_medium;

      if (!real_utm_source) {
        getUtmSource();
      }
      if (real_utm_source === "healthguardian-direct") {
        sessionStorage.setItem("utm-medium", "");
        utm_medium = "";
      } else if (
        real_utm_source === "healthguardian-facebook" ||
        real_utm_source === "healthguardian-instagram" ||
        real_utm_source === "healthguardian-snapchat" ||
        real_utm_source === "healthguardian-twitter" ||
        real_utm_source === "healthguardian-pinterest"
      ) {
        sessionStorage.setItem("utm-medium", "social");
        utm_medium = "social";
      } else {
        sessionStorage.setItem("utm-medium", "referral");
        utm_medium = "referral";
      }
      return utm_medium;
    }
  }

  function checkForExistingUTM(utm_tag) {
    const params = new URLSearchParams(window.location.search);
    return params.get(utm_tag);
  }

  function getFacebookUTM(utm_tag) {
    let storedUtm = sessionStorage.getItem(utm_tag);

    if (storedUtm || storedUtm === "") {
      return storedUtm;
    }

    let utm = checkForExistingUTM(utm_tag);
    if (!utm) {
      utm = "";
      if (utm_tag === "utm_term") {
        if ($(".section-utm-post").length > 0) {
          utm = $(".section-utm-post").data("utm-term");
        }
      }
    }

    if (utm_tag === "utm_term") {
      return utm;
    }

    sessionStorage.setItem(utm_tag, utm);

    return utm;
  }

  function addUtms(utmArray) {
    utmArray.forEach((item) => {
      item.value = item.function;
    });

    $("a").each(function () {
      if ($(this).attr("href")) {
        let url = $(this).attr("href");
        let domain;
        let match;
        if (
          (match = url.match(
            /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im
          ))
        ) {
          domain = match[1];
          if ((match = domain.match(/^[^\.]+\.(.+\..+)$/))) {
            domain = match[1];
          }
        }

        if (friendlyUrls.includes(domain)) {
          let url = new URL($(this).attr("href"));
          utmArray.forEach((item) => {
            if (item.value !== "") {
              url.searchParams.append(item.utm, item.value);
            }
          });

          $(this).attr("href", url.href);
        }
      }
    });
  }

  if (variables.utm_parameters.length > 0) {
    let utmArray = [];

    variables.utm_parameters.forEach((item) => {
      let utmFunction = getFacebookUTM(item);

      if (item === "utm_source") {
        utmFunction = getUtmSource();
      } else if (item === "utm_medium") {
        utmFunction = getUtmMedium();
      }

      utmArray.push({
        utm: item,
        function: utmFunction,
        value: "",
      });
    });

    addUtms(utmArray);
  }

  $(".schema-faq-section").on("click", function () {
    let $this = $(this);
    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $this.find(".schema-faq-answer").slideUp();
    } else {
      $this.parent().find(".schema-faq-section").removeClass("active");
      $this.parent().find(".schema-faq-answer").slideUp();
      $this.toggleClass("active");
      $this.find(".schema-faq-answer").slideToggle();
    }
  });
  $(".posts-advertisement__button").on("click", function () {
    $(this).parent().hide();
  });

  if ($(".acf-quiz").length > 0) {
    $(".acf-quiz").each(function () {
      const fillProgressBar = (
        progressBar,
        totalQuestions,
        currentQuestion
      ) => {
        let percentage = (currentQuestion / totalQuestions) * 100;
        progressBar.css("width", `${percentage}%`);
      };

      const changeSection = (
        quiz,
        currentSection,
        nextSection,
        progressBar,
        totalQuestions
      ) => {
        // console.log(pointAmount);
        if (nextSection.hasClass("final")) {
          let resultSections = quiz
              .closest(".acf-quiz-container")
              .find(".acf-quiz__results"),
            resultSection = false;
          seeResultsButton.hide();

          resultSections.each(function () {
            let $this = $(this),
              pointsFrom = Number($this.data("from")),
              pointsTo = Number($this.data("to"));

            if (pointsFrom <= pointAmount && pointAmount <= pointsTo) {
              resultSection = $this;
              let href = $this.data("anchor");

              if (href !== "") {
                seeResultsButton.show().css("display", "flex");
                seeResultsButton.attr(
                  "section",
                  `.acf-quiz__results[data-id="${$this.data("id")}"]`
                );
                seeResultsButton.attr("href", `#${href}`);
              }

              $this.slideDown();
            } else {
              $this.slideUp();
            }
          });

          if (!resultSection) {
            return;
          }

          $.ajax({
            url: variables.ajaxUrl,
            data: {
              action: "save_quiz_results",
              quiz_id: quiz.data("id"),
              group_id: resultSection.data("id"),
            },
            type: "POST",
          });
        }
        currentSection.fadeOut(function () {
          $.when(nextSection.fadeIn().css("display", "flex")).then(function () {
            quiz.css("height", nextSection.outerHeight());
            fillProgressBar(
              progressBar,
              totalQuestions,
              nextSection.data("question")
            );
          });
        });
      };

      let quiz = $(this),
        beginQuizButton = quiz.find(".main-button"),
        firstStage = quiz.find(".acf-quiz__stage.first"),
        questionContainer = quiz.find(".acf-quiz__question-container"),
        totalQuestions = quiz.data("questions"),
        progressBar = quiz.find(".acf-quiz__progress-fill"),
        answerButton = quiz.find(".answer"),
        nextAnswerButton = quiz.find(".navigate-answer.next"),
        previousAnswerButton = quiz.find(
          ".navigate-answer.back:not(.disabled)"
        ),
        imperialButton = quiz.find(".system-button.imperial"),
        metricButton = quiz.find(".system-button.metric"),
        popupClose = quiz.find(".info-popup__close"),
        reloadQuizButton = quiz.find(".reload-quiz"),
        seeResultsButton = quiz.find(".see-results"),
        weight = false,
        height = false,
        pointAmount = 0,
        select = quiz.find(".answer-select2").select2({
          minimumResultsForSearch: -1,
          placeholder: $(this).data("placeholder"),
          width: "100%",
          templateResult: function (option, container) {
            if ($(option.element).attr("data-hide") == "true") {
              $(container).css("display", "none");
            } else {
              $(container).css("display", "");
            }
            return option.text;
          },
        });

      select.on("select2:opening", function () {
        $(this).next().addClass("opened");
      });

      select.on("select2:closing", function () {
        $(this).next().removeClass("opened");
      });

      select.on("change", function () {
        let $this = $(this),
          points = Number($this.val());

        if ($this.hasClass("active")) {
          pointAmount -= Number($this.attr("data-value"));
        }

        if ($this.hasClass("multiple")) {
          let selects = $this.closest(".imperial-metric-block").find("select"),
            noValueSelect = false,
            type = $this.data("type");

          if (type === "height") {
            let height = $this.find("option:selected").data("height"),
              weightSelect = $this
                .closest(".imperial-metric-block")
                .find("#weight");

            weightSelect.find("option").attr("data-hide", "false");
            weightSelect
              .find(`option:not([data-height="${height}"])`)
              .attr("data-hide", "true");
          }

          selects.each(function () {
            if ($(this).val() === "" || $(this).val() === null) {
              noValueSelect = true;
              return false;
            }
          });

          if (noValueSelect) {
            return;
          }

          let pointsAdded = Number(
            $this.closest(".question").attr("data-points")
          );

          if (!isNaN(pointsAdded)) {
            pointAmount -= pointsAdded;
          }

          weight = quiz.find("#weight").val();
          height = quiz.find("#height").val();

          pointAmount += Number(weight);
          $this.closest(".question").attr("data-points", weight);
        } else {
          $this.addClass("active");
          $this.attr("data-value", points);
          pointAmount += points;
        }

        let questionContainer = $this.closest(".question"),
          nextQuestionContainer = questionContainer.next();

        $(this)
          .closest(".question")
          .find(".navigate-answer.next")
          .addClass("active");

        changeSection(
          quiz,
          questionContainer,
          nextQuestionContainer,
          progressBar,
          totalQuestions
        );
      });
      beginQuizButton.on("click", function () {
        quiz.css("height", quiz.outerHeight());
        fillProgressBar(progressBar, totalQuestions, 1);
        firstStage.fadeOut(function () {
          $.when(questionContainer.fadeIn().css("display", "flex")).then(
            function () {
              quiz.addClass("quiz-started");
              quiz.css("height", questionContainer.outerHeight());
            }
          );
        });
      });

      answerButton.on("click", function () {
        let $this = $(this),
          points = Number($this.find("input").val()),
          answers = $this.siblings(".answer"),
          questionContainer = $this.closest(".question"),
          nextQuestionContainer = questionContainer.next(),
          wasSelected = questionContainer.find(".answer.active");

        if (wasSelected.length > 0) {
          pointAmount -= Number(wasSelected.find(".point-container").val());
        }

        answers.removeClass("active");
        $this.addClass("active");
        $this
          .closest(".question")
          .find(".navigate-answer.next")
          .addClass("active");
        pointAmount += points;
        changeSection(
          quiz,
          questionContainer,
          nextQuestionContainer,
          progressBar,
          totalQuestions
        );
      });

      nextAnswerButton.on("click", function () {
        let $this = $(this),
          questionContainer = $this.closest(".question"),
          nextQuestionContainer = questionContainer.next();

        changeSection(
          quiz,
          questionContainer,
          nextQuestionContainer,
          progressBar,
          totalQuestions
        );
      });

      previousAnswerButton.on("click", function () {
        let $this = $(this),
          questionContainer = $this.closest(".question"),
          nextQuestionContainer = questionContainer.prev();

        changeSection(
          quiz,
          questionContainer,
          nextQuestionContainer,
          progressBar,
          totalQuestions
        );
      });

      imperialButton.on("click", function () {
        let $this = $(this),
          selects = $this.closest(".question").find(".imperial-block select"),
          noValueSelect = false,
          nextButton = $this.closest(".question").find(".navigate-answer.next");

        selects.each(function () {
          if ($(this).val() === "" || $(this).val() === null) {
            noValueSelect = true;
            return false;
          }
        });

        if (noValueSelect) {
          nextButton.removeClass("active");
        } else {
          nextButton.addClass("active");
        }

        $this.addClass("active");
        $this.siblings(".metric").removeClass("active");
        $this.closest(".question").find(".imperial-block").addClass("active");
        $this.closest(".question").find(".metric-block").removeClass("active");
      });

      metricButton.on("click", function () {
        let $this = $(this),
          selects = $this.closest(".question").find(".metric-block select"),
          noValueSelect = false,
          nextButton = $this.closest(".question").find(".navigate-answer.next");

        selects.each(function () {
          if ($(this).val() === "" || $(this).val() === null) {
            noValueSelect = true;
            return false;
          }
        });

        if (noValueSelect) {
          nextButton.removeClass("active");
        } else {
          nextButton.addClass("active");
        }

        $this.addClass("active");
        $this.siblings(".imperial").removeClass("active");
        $this
          .closest(".question")
          .find(".imperial-block")
          .removeClass("active");
        $this.closest(".question").find(".metric-block").addClass("active");
      });

      reloadQuizButton.on("click", function () {
        quiz
          .closest(".acf-quiz-container")
          .find(".acf-quiz__results")
          .slideUp();
        quiz.find(".answer").removeClass("active");
        quiz.find(".answer-select2").removeClass("active");
        quiz.find(".answer-select2").val("").trigger("change.select2");

        questionContainer = $(this).closest(".question");
        nextQuestionContainer = quiz.find('.question[data-question="1"]');
        pointAmount = 0;

        changeSection(
          quiz,
          questionContainer,
          nextQuestionContainer,
          progressBar,
          totalQuestions
        );
      });

      seeResultsButton.on("click", function (e) {
        e.preventDefault();
        let $this = $(this),
          href = $this.attr("href"),
          resultsSection = $this.attr("section");

        scrollToSection(`${resultsSection} ${href}`);
      });

      if ($(window).width() <= 550) {
        let activePopup = false,
          activePopupContainer = false;

        quiz.find(".info").on("click", function (e) {
          e.stopPropagation();
          activePopupContainer = $(this);
          activePopup = activePopupContainer.find(".info-popup__fixed");

          activePopup.appendTo("body");
          activePopup.fadeIn().css("display", "flex");

          activePopup.on("click.closepopup", function (e) {
            e.stopPropagation();
            let target = $(e.target);

            if (target.hasClass("info-popup__fixed")) {
              activePopup.fadeOut(function () {
                activePopup.appendTo(activePopupContainer);
                activePopup.off("click.closepopup");
              });
            }
          });
        });

        popupClose.on("click", function (e) {
          e.stopPropagation();
          activePopup.fadeOut(function () {
            activePopup.appendTo(activePopupContainer);
            activePopup.off("click.closepopup");
          });
        });
      }
    });
  }

  // CTA resizing based on header height
  const resizeCta = () => {
    let headerHeight = $("header").outerHeight();
    $(".section-quizv3.top").css("top", headerHeight + "px");
  };

  $("header .cookies__button").on("click", function () {
    $(this).closest(".cookies").slideUp(300);
    setCookie("hgConsentGiven", true, 365);
  });

  if (!$.cookie('hgConsentGiven')) {
    $('header .cookies').slideToggle();
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  repositionTopStickyCta();

  function repositionTopStickyCta() {
    if (!$(".section-quizv3.top").length) {
      return;
    }
    resizeCta();

    $(document).on("scroll", function () {
      resizeCta();
    });

    $(window).on("resize", function () {
      resizeCta();
    });
  }

  var $quiz = $('.section-quizv3.stickyDynamic');
  if($quiz.length>0) {
    var originalOffset = $('.stickyHere').offset().top;
    var headerHeight = $('header').height();

    $(window).on('scroll', function () {
      headerHeight = $('header').height();
      $quiz.css({
        top: headerHeight,
      });

      if ($(window).scrollTop() >= (originalOffset - headerHeight) ) {
        $quiz.addClass('show');
      } else {
        $quiz.removeClass('show');
      }
    });
  }
});
