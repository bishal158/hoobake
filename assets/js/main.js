$(document).ready(function () {
  const multiSelect = () => {
    const wrapper = document.querySelector("#work_category");
    if (wrapper) {
      $("#work_category").select2();
    }
  };
  multiSelect();
  // nice select initialisation
  $(".order-table-controllers select").niceSelect();
  $(".bi-profile-edit-common-section select").niceSelect();
  $("#payment-terms select").niceSelect();

  // owl carasoul for testimonials

  $(".testimonial-slide-wrapper").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // owl carasoul for previous work
  $(".previous-work-wrapper").owlCarousel({
    loop: true,
    nav: true,
    dots: true, // Enable dots by default for larger screens
    margin: 24,
    responsive: {
      0: {
        items: 1,
        dots: false, // Disable dots on mobile devices
      },
      768: {
        items: 2,
        dots: true, // Enable dots for tablets and larger screens if desired
      },
      1200: {
        items: 1,
        dots: false, // Enable dots for large screens
      },
      1360: {
        items: 2,
        dots: false, // Enable dots for large screens
      },
      1800: {
        items: 3,
        dots: true, // Enable dots for large screens
      },
      1900: {
        items: 4,
        dots: true, // Enable dots for large screens
      },
    },
  });

  // flat-picker js
  flatpickr("#dob", {
    dateFormat: "Y-m-d", // Customize the date format if needed
  });

  flatpickr("#delivery-date", {
    dateFormat: "Y-m-d", // Customize the date format if needed
  });
  flatpickr("#bill-date", {
    dateFormat: "Y-m-d", // Customize the date format if needed
  });
});

// -------------------------------------------------Bishal Js Starts Here-----------------------------//

document.addEventListener("DOMContentLoaded", () => {
  // Select the input element with the id "phone"
  var input = document.querySelector("#phone");

  // Check if the input element exists before initializing intlTelInput
  if (input) {
    var iti = window.intlTelInput(input, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  }

  const openSidebar = (btn) => {
    const toggleBtn = document.querySelector(btn);
    const sidebar = document.querySelector(".dashboard-side-bar-wrapper");
    const mainDisplay = document.querySelector(".dashboard-main-display");

    if (toggleBtn && sidebar && mainDisplay) {
      const closeSidebar = () => {
        sidebar.classList.remove("open");
        mainDisplay.classList.remove("blur");
        // Update SVG path for the closed state
        toggleBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="8.75" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        `;
      };

      const openSidebar = () => {
        sidebar.classList.add("open");
        mainDisplay.classList.add("blur");
        // Update SVG path for the open state
        toggleBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        `;
      };

      // Open or close sidebar when button is clicked
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains("open")) {
          closeSidebar();
        } else {
          openSidebar();
        }
      });

      // Close sidebar when clicking outside of it
      document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
          closeSidebar();
        }
      });

      // Optional: Prevent the sidebar from closing when clicking inside it
      sidebar.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  };

  // Usage
  openSidebar(".side-bar-icon");

  // custom bootstrap accordion styles
  function initializeAccordion() {
    // Select all accordion items
    var accordionItems = document.querySelectorAll(".accordion-item");

    if (accordionItems.length > 0) {
      // Check if any accordion items exist
      accordionItems.forEach(function (item) {
        var collapseElement = item.querySelector(".accordion-collapse");

        // Check if the collapse element exists before adding event listeners
        if (collapseElement) {
          collapseElement.addEventListener("show.bs.collapse", function () {
            item.classList.add("active");
          });

          collapseElement.addEventListener("hide.bs.collapse", function () {
            item.classList.remove("active");
          });
        }
      });
    } else {
      console.warn("No accordion items found.");
    }
  }

  // Call the function to initialize the accordion
  initializeAccordion();

  // order page table search buttons
  function toggleActive() {
    const button = document.querySelectorAll("[data-search-btn]");

    if (button) {
      button.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          btn.previousElementSibling.classList.toggle("active");
        });
      });
    }
  }
  toggleActive();

  //  open notification window
  const NotificationWindow = () => {
    const notificationBtn = document.querySelector("#open-notification-window");

    const notificationScreen = document.querySelector(
      ".bi-notification-screen"
    );
    if (notificationBtn && notificationScreen) {
      notificationBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        notificationScreen.classList.toggle("active");
      });

      document.addEventListener("click", (event) => {
        if (
          !notificationScreen.contains(event.target) &&
          !notificationScreen.contains(event.target)
        ) {
          notificationScreen.classList.remove("active");
        }
      });
    }
  };
  NotificationWindow();

  // initializeEmojiPicker('.bi-post-comment-box-input', '.bi-post-cmnt-box-btn');

  // profile avatar upload

  // upload profile image in settings
  const avaterUploader = (upload_area, input, prview) => {
    const profile_image_label = document.querySelector(upload_area);
    const profile_image_upload_input = document.querySelector(input);
    const profile_image_preview = document.querySelector(prview);
    if (
      profile_image_label &&
      profile_image_upload_input &&
      profile_image_preview
    ) {
      const handleFiles = (files) => {
        if (files.length > 0) {
          const file = files[0];
          console.log(file);
          const reader = new FileReader();
          reader.onload = function (e) {
            profile_image_preview.querySelector("img").src = e.target.result;
            // profile_image_preview.style.backgroundImage = `url(${e.target.result})`;
          };
          reader.readAsDataURL(file);
        }
      };

      profile_image_upload_input.addEventListener("change", (e) => {
        handleFiles(e.target.files);
      });

      profile_image_label.addEventListener("dragover", (e) => {
        e.preventDefault();
        profile_image_label.classList.add("dragover");
      });

      profile_image_label.addEventListener("dragleave", (e) => {
        e.preventDefault();
        profile_image_label.classList.remove("dragover");
      });

      profile_image_label.addEventListener("drop", (e) => {
        e.preventDefault();
        profile_image_label.classList.remove("dragover");
        handleFiles(e.dataTransfer.files);
      });
    }
  };
  // initialize
  avaterUploader(".avatar-upload-area", "#avatar", "#avater-image");
  avaterUploader(".avatar-upload-area", "#product_img", "#product_preview_img");

  // password field visibility
  const togglePasswordVisibility = (btns) => {
    const passwordToggleBtns = document.querySelectorAll(btns);

    if (passwordToggleBtns) {
      passwordToggleBtns.forEach((passwordToggleBtn) => {
        let isPasswordVisible = false;

        passwordToggleBtn.addEventListener("click", (e) => {
          e.preventDefault();

          // Toggle the password visibility
          const passwordField =
            passwordToggleBtn.parentElement.querySelector("input");
          isPasswordVisible = !isPasswordVisible;

          if (isPasswordVisible) {
            // Show the text and change the icon to the "eye-off" SVG
            passwordField.type = "text";
            passwordToggleBtn.innerHTML = `<svg  class="eye-icon-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
          } else {
            // Hide the text and change the icon back to the "eye" SVG
            passwordField.type = "password";
            passwordToggleBtn.innerHTML = `
            <svg  class="eye-icon-btn"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M14.5299 9.47001L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C12.9899 8.42001 13.8799 8.82001 14.5299 9.47001Z" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.8198 5.77001C16.0698 4.45001 14.0698 3.73001 11.9998 3.73001C8.46984 3.73001 5.17984 5.81001 2.88984 9.41001C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.47 14.53L2 22" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.0003 2L14.5303 9.47" stroke="#6C688D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              `;
          }
        });
      });
    }
  };
  // for settings page
  togglePasswordVisibility(".eye-icon-btn");
  // for signup and signin page
  togglePasswordVisibility(".forget--pass--icon");

  //  profile image upload functionality
  function initializeImageUpload({ uploadInputSelector, previewSelector }) {
    // Attempt to select the elements
    const uploadInput = document.querySelector(uploadInputSelector);
    const preview = document.querySelector(previewSelector);

    // Check if elements exist
    if (preview && uploadInput) {
      function handleFiles(files) {
        preview.innerHTML = "";
        const images = Array.from(files);

        images.forEach((image) => {
          const img = document.createElement("img");
          const reader = new FileReader();

          reader.onload = (e) => {
            img.src = e.target.result;
            preview.appendChild(img);
          };
          reader.readAsDataURL(image);
        });
      }

      uploadInput.addEventListener("change", (e) => {
        handleFiles(e.target.files);
      });
    }
  }

  // Initialize product image upload
  initializeImageUpload({
    uploadInputSelector: "#what-new-image-upload",
    previewSelector: ".bi-whats-new-preview-area",
  });

  //  contact baker sidebar

  const contactBakerOpen = (sidebarWrapper, pageWrapper, toggleBtns) => {
    const page = document.querySelector(pageWrapper);
    const sidebar = document.querySelector(sidebarWrapper);
    const openButtons = document.querySelectorAll(toggleBtns);

    // Check if necessary elements exist before proceeding
    if (!page || !sidebar || openButtons.length === 0) {
      console.warn("Sidebar, page wrapper, or toggle buttons not found.");
      return; // Exit the function if elements are missing
    }

    // Function to toggle the sidebar
    const toggleSidebar = () => {
      sidebar.classList.toggle("active");
      page.classList.toggle("sidebar-active");
    };

    // Close the sidebar if the user clicks outside of it
    const closeSidebarOnClickOutside = (event) => {
      if (
        !sidebar.contains(event.target) &&
        ![...openButtons].some((btn) => btn.contains(event.target))
      ) {
        sidebar.classList.remove("active");
        page.classList.remove("sidebar-active");
      }
    };

    // Add event listeners to all toggle buttons
    openButtons.forEach((button) => {
      button.addEventListener("click", toggleSidebar);
    });

    // Add event listener to the document to detect clicks outside
    document.addEventListener("click", closeSidebarOnClickOutside);
  };

  // Initialize the function
  contactBakerOpen(
    ".contact-with-baker-sidebar",
    "[data-page-wrapper]",
    "[data-sidebar-toggler]"
  );

  //  step form

  const switchSteps = (
    allSteps,
    nextButtons,
    previousButtons,
    goToLastButtons,
    goToFirstButtons
  ) => {
    const steps = document.querySelectorAll(allSteps);
    const nextBtns = document.querySelectorAll(nextButtons);
    const previousBtns = document.querySelectorAll(previousButtons);
    const lastBtns = document.querySelectorAll(goToLastButtons); // Multiple buttons to go to the last step
    const firstBtns = document.querySelectorAll(goToFirstButtons); // Multiple buttons to go to the first step
    let currentStep = 0; // Track the current active step

    // Function to update the active class
    const updateActiveStep = () => {
      steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
      });

      // Disable/enable next/previous buttons
      nextBtns.forEach((btn) => {
        btn.disabled = currentStep === steps.length - 1; // Disable next on last step
      });
      previousBtns.forEach((btn) => {
        btn.disabled = currentStep === 0; // Disable previous on first step
      });
    };

    // Initialize the form by setting the first step as active
    updateActiveStep();

    // Add event listeners to the next buttons
    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++; // Go to the next step
          updateActiveStep();
        }
      });
    });

    // Add event listeners to the previous buttons
    previousBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--; // Go to the previous step
          updateActiveStep();
        }
      });
    });

    // Add event listeners to go directly to the last step
    lastBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentStep = steps.length - 1; // Set current step to the last step
        updateActiveStep(); // Update the UI
      });
    });

    // Add event listeners to go directly to the first step
    firstBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentStep = 0; // Set current step to the first step
        updateActiveStep(); // Update the UI
      });
    });
  };

  // Initialize the function
  switchSteps(
    "[data-steps]",
    "[data-next-btns]",
    "[data-previous-btns]",
    "[data-go-to-last-btn]",
    "[data-go-to-first-btn]"
  );

  const update_you_msg = (toggleBtn) => {
    const btns = document.querySelectorAll(toggleBtn);

    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from triggering the document listener

        const myMsg = btn.parentNode.querySelector(".my-msg-to-ai").textContent;
        const actionBoxTextarea = btn.parentNode.querySelector("textarea");
        const actionBox = btn.parentNode.querySelector(".edit-my-msg-form");

        // Toggle the current action box
        actionBox.classList.toggle("active");
        actionBoxTextarea.value = myMsg;

        // Close other action boxes
        document.querySelectorAll(".edit-my-msg-form.active").forEach((box) => {
          if (box !== actionBox) {
            box.classList.remove("active");
          }
        });
      });
    });

    // Click outside to remove active class
    document.addEventListener("click", (event) => {
      document.querySelectorAll(".edit-my-msg-form.active").forEach((box) => {
        if (!box.contains(event.target)) {
          box.classList.remove("active");
        }
      });
    });
  };

  update_you_msg("#update-msg-icon");

  // delete or update previous work item

  const previousWorkActions = (toggleBtn) => {
    const btns = document.querySelectorAll(toggleBtn);
    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from triggering the document listener
        const actionBox = btn.parentNode.querySelector(".see-more-box");

        // Toggle the current action box
        actionBox.classList.toggle("active");

        // Close other action boxes
        document.querySelectorAll(".see-more-box.active").forEach((box) => {
          if (box !== actionBox) {
            box.classList.remove("active");
          }
        });
      });
    });

    // Click outside to remove active class
    document.addEventListener("click", (event) => {
      document.querySelectorAll(".see-more-box.active").forEach((box) => {
        if (!box.contains(event.target)) {
          box.classList.remove("active");
        }
      });
    });
  };

  previousWorkActions(".more-bnt");

  // Append fields on click
  const appendSocialLinkField = (addBtn, container) => {
    const addButton = document.querySelector(addBtn);
    const parentElement = document.querySelector(container);

    // Track the number of added sections
    let fieldCount = 0;
    const maxFields = 2;

    // Track whether the outer wrapper has been created
    let outerWrapper;

    if (addButton && parentElement) {
      addButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(addButton);
        // Prevent adding more than 6 sections
        if (fieldCount >= maxFields) {
          alert("You can only add up to 3 fields.");
          return;
        }

        // Create outer wrapper on first click
        if (!outerWrapper) {
          outerWrapper = document.createElement("div");
          outerWrapper.className = "profile-edit-input-field-wrapper";

          // Insert the outer wrapper before the Add More button
          parentElement.insertBefore(outerWrapper, addButton);
        }

        // Create input wrapper
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "profile-edit-input-field-inner-wrapper";

        // Create label
        const label = document.createElement("label");
        label.setAttribute("for", `companySocial${fieldCount + 1}`);
        label.className = "bi-profile-edit-common-label";
        label.textContent = `Social link`;

        // Create input field
        const input = document.createElement("input");
        input.type = "text";
        input.id = `companySocial${fieldCount + 1}`;
        input.name = `companySocial${fieldCount + 1}`;
        input.className = "bi-common-input-field";
        input.placeholder = "https://heroicons.com/";
        // Create outer wrapper on first click
        if (!outerWrapper) {
          outerWrapper = document.createElement("div");
          outerWrapper.className = "profile-edit-input-field-wrapper";
          outerWrapper.appendChild(inputWrapper);
          // Insert the outer wrapper before the Add More button
          parentElement.insertBefore(outerWrapper, addButton);
        }
        // Append label and input to wrapper
        inputWrapper.appendChild(label);
        inputWrapper.appendChild(input);

        // Append the input wrapper inside the outer wrapper
        outerWrapper.appendChild(inputWrapper);

        // Increment the field count
        fieldCount++;
      });
    }
  };

  appendSocialLinkField("#add-social-media-btn", "#company-info-section");

  // review step form
  function setupStepForm(
    stepsClassName,
    nextBtnClassName,
    modalClassName,
    initialStepIndex = 0
  ) {
    const steps = document.querySelectorAll(stepsClassName);
    const nextButtons = document.querySelectorAll(nextBtnClassName);
    const modal = document.querySelector(modalClassName);

    if (steps.length === 0) {
      console.warn("No steps found with the class name:", stepsClassName);
      return;
    }

    if (nextButtons.length === 0) {
      console.warn(
        "No next buttons found with the class name:",
        nextBtnClassName
      );
      return;
    }

    if (!modal) {
      console.warn("Modal not found with the class name:", modalClassName);
      return;
    }

    let currentStepIndex = initialStepIndex;

    function updateStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
      });
    }

    function handleNextButtonClick(event) {
      event.preventDefault(); // Prevent the default button action

      if (currentStepIndex < steps.length - 1) {
        currentStepIndex += 1;
        updateStep(currentStepIndex);
      } else {
        // If it's the last step, close the modal and reset the index
        if (modal.classList.contains("show")) {
          const modalInstance = bootstrap.Modal.getInstance(modal);
          if (modalInstance) {
            modalInstance.hide();
          }
        }
        // Reset to initial step index after closing modal
        currentStepIndex = initialStepIndex;
        updateStep(currentStepIndex);
      }
    }

    nextButtons.forEach((button) => {
      button.addEventListener("click", handleNextButtonClick);
    });

    // Initialize the form with the initial step
    updateStep(currentStepIndex);
  }

  // Example usage
  setupStepForm(".review-steps", "[data-next-review]", ".modal");

  // index page mobile header

  // for header

  const openMobileHeader = (toggleBtn) => {
    const btns = document.querySelectorAll(toggleBtn);

    // Proceed only if toggle buttons exist
    if (btns.length) {
      btns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent the click from triggering the document listener
          const actionBox = btn.parentNode.querySelector(
            ".mobile-header-routes-box"
          );

          // Proceed only if actionBox exists
          if (actionBox) {
            // Toggle the current action box
            actionBox.classList.toggle("active");

            // Close other active action boxes
            document
              .querySelectorAll(".mobile-header-routes-box.active")
              .forEach((box) => {
                if (box !== actionBox) {
                  box.classList.remove("active");
                }
              });
          }
        });
      });

      // Click outside to remove active class
      document.addEventListener("click", (event) => {
        document
          .querySelectorAll(".mobile-header-routes-box.active")
          .forEach((box) => {
            if (!box.contains(event.target)) {
              box.classList.remove("active");
            }
          });
      });
    }
  };

  // Call the function to initialize the mobile header functionality
  openMobileHeader("#open-mobile-header");
});
