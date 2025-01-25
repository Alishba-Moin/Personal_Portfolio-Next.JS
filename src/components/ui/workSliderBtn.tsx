"use client"; // Indicates that this component should be rendered on the client side

// Import necessary hooks and components
import { useSwiper } from "swiper/react"; // Hook to access Swiper instance
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"; // Importing left and right caret icons

/**
 * WorkSliderBtns Component
 * 
 * This component renders navigation buttons for the Swiper slider.
 * - Left Button: Navigates to the previous slide.
 * - Right Button: Navigates to the next slide.
 * 
 * The buttons are styled using Tailwind CSS classes and include hover effects.
 * They are responsive for mobile, tablet, and desktop screens.
 */
export default function WorkSliderBtns() {
  // Access the Swiper instance to control slider navigation
  const swiper = useSwiper();

  return (
    // Container div for the navigation buttons
    <div className="flex gap-2 absolute right-4 bottom-[calc(50%_-_22px)] xl:bottom-4 z-20 w-full justify-between xl:w-max xl:justify-none">
      
      {/* Left Navigation Button */}
      <button
        className="bg-accent hover:bg-accent-hover text-primary text-[16px] w-[36px] h-[36px] flex justify-center items-center rounded-full transition-all md:text-[20px] md:w-[44px] md:h-[44px] lg:text-[22px] lg:w-[48px] lg:h-[48px]"
        onClick={() => swiper.slidePrev()} // Handler to navigate to the previous slide
        aria-label="Previous Slide" // Accessibility label for screen readers
      >
        {/* Left Caret Icon */}
        <PiCaretLeftBold" />
      </button>

      {/* Right Navigation Button */}
      <button
        className="bg-accent hover:bg-accent-hover text-primary text-[16px] w-[36px] h-[36px] flex justify-center items-center rounded-full transition-all md:text-[20px] md:w-[44px] md:h-[44px] lg:text-[22px] lg:w-[48px] lg:h-[48px]"
        onClick={() => swiper.slideNext()} // Handler to navigate to the next slide
        aria-label="Next Slide" // Accessibility label for screen readers
      >
        {/* Right Caret Icon */}
        <PiCaretRightBold  />
      </button>
    </div>
  );
}

