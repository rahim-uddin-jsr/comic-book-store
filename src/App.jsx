import "./App.css";
import HeaderSlider from "./Components/Sliders/HeaderSlider";

function App() {
  return (
    <>
      <div>
        <button className="btn">Button</button>
        <br />
        <br />
        <HeaderSlider />
      </div>
      <div>
        {/* 1 */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill="none"></rect>
          <circle
            cx="13.5"
            cy="23.5"
            r="9.5"
            transform="rotate(-180 13.5 23.5)"
            fill="url(#paint0_linear_0_1120)"
          ></circle>
          <path
            d="M24.0898 15.3749H14.4532C13.7908 15.3768 13.1479 15.1502 12.6332 14.7333L10.0782 12.6916C9.73575 12.4195 9.45925 12.0736 9.26934 11.6797C9.07943 11.2857 8.98104 10.8539 8.98152 10.4166C8.97845 9.97881 9.0757 9.54616 9.2658 9.1518C9.4559 8.75744 9.7338 8.41187 10.0782 8.14159L12.6332 6.09992C13.1503 5.68718 13.7916 5.46109 14.4532 5.45825H24.0898C24.8634 5.45825 25.6053 5.76554 26.1522 6.31252C26.6992 6.8595 27.0065 7.60137 27.0065 8.37492V12.4583C27.0065 13.2318 26.6992 13.9737 26.1522 14.5206C25.6053 15.0676 24.8634 15.3749 24.0898 15.3749V15.3749ZM14.4532 7.20825C14.1897 7.20781 13.9341 7.29849 13.7298 7.46492L11.1748 9.50659C11.0368 9.61475 10.9252 9.75288 10.8485 9.91054C10.7717 10.0682 10.7319 10.2412 10.7319 10.4166C10.7319 10.5919 10.7717 10.765 10.8485 10.9226C10.9252 11.0803 11.0368 11.2184 11.1748 11.3266L13.7298 13.3683C13.9359 13.5316 14.1903 13.6219 14.4532 13.6249H24.0898C24.3993 13.6249 24.696 13.502 24.9148 13.2832C25.1336 13.0644 25.2565 12.7677 25.2565 12.4583V8.37492C25.2565 8.0655 25.1336 7.76875 24.9148 7.54996C24.696 7.33117 24.3993 7.20825 24.0898 7.20825H14.4532Z"
            fill="#292D32"
          ></path>
          <path
            d="M21.5714 27.0417H11.9347C11.1612 27.0417 10.4193 26.7344 9.87234 26.1874C9.32536 25.6404 9.01807 24.8986 9.01807 24.125V20.0417C9.01807 19.2681 9.32536 18.5263 9.87234 17.9793C10.4193 17.4323 11.1612 17.125 11.9347 17.125H21.5714C22.2338 17.1231 22.8767 17.3497 23.3914 17.7667L25.9464 19.8083C26.289 20.0802 26.5657 20.4261 26.7556 20.8201C26.9455 21.2141 27.0438 21.646 27.0431 22.0833C27.0461 22.5211 26.9489 22.9538 26.7588 23.3481C26.5687 23.7425 26.2908 24.0881 25.9464 24.3583L23.3914 26.4C22.8767 26.817 22.2338 27.0436 21.5714 27.0417V27.0417ZM11.9347 18.875C11.6253 18.875 11.3286 18.9979 11.1098 19.2167C10.891 19.4355 10.7681 19.7323 10.7681 20.0417V24.125C10.7681 24.4344 10.891 24.7312 11.1098 24.95C11.3286 25.1688 11.6253 25.2917 11.9347 25.2917H21.5714C21.8346 25.2927 22.09 25.202 22.2936 25.035L24.8497 22.9933C24.9877 22.8852 25.0993 22.7471 25.1761 22.5894C25.2528 22.4317 25.2927 22.2587 25.2927 22.0833C25.2927 21.908 25.2528 21.735 25.1761 21.5773C25.0993 21.4196 24.9877 21.2815 24.8497 21.1733L22.2947 19.1317C22.0889 18.9689 21.835 18.8787 21.5726 18.875H11.9347Z"
            fill="#292D32"
          ></path>
          <path
            d="M17.125 18V14.5C17.1265 14.2684 17.2192 14.0467 17.383 13.883C17.5467 13.7192 17.7684 13.6265 18 13.625C18.2316 13.6265 18.4533 13.7192 18.617 13.883C18.7808 14.0467 18.8735 14.2684 18.875 14.5V18C18.8735 18.2316 18.7808 18.4533 18.617 18.617C18.4533 18.7808 18.2316 18.8735 18 18.875C17.7684 18.8735 17.5467 18.7808 17.383 18.617C17.2192 18.4533 17.1265 18.2316 17.125 18V18ZM17.125 29.6667V26.1667C17.1265 25.9351 17.2192 25.7134 17.383 25.5496C17.5467 25.3859 17.7684 25.2932 18 25.2917C18.2316 25.2932 18.4533 25.3859 18.617 25.5496C18.7808 25.7134 18.8735 25.9351 18.875 26.1667V29.6667C18.8735 29.8983 18.7808 30.1199 18.617 30.2837C18.4533 30.4475 18.2316 30.5401 18 30.5417C17.7684 30.5401 17.5467 30.4475 17.383 30.2837C17.2192 30.1199 17.1265 29.8983 17.125 29.6667Z"
            fill="#292D32"
          ></path>
          <path
            d="M14.5 30.5417C14.2684 30.5402 14.0467 30.4475 13.883 30.2838C13.7192 30.12 13.6265 29.8983 13.625 29.6667C13.6265 29.4352 13.7192 29.2135 13.883 29.0497C14.0467 28.886 14.2684 28.7933 14.5 28.7917H21.5C21.7316 28.7933 21.9533 28.886 22.117 29.0497C22.2808 29.2135 22.3735 29.4352 22.375 29.6667C22.3735 29.8983 22.2808 30.12 22.117 30.2838C21.9533 30.4475 21.7316 30.5402 21.5 30.5417H14.5Z"
            fill="#292D32"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_0_1120"
              x1="13.5"
              y1="14"
              x2="13.5"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-highlight, #4A89DC)"></stop>
              <stop
                offset="1"
                stopColor="var(--color-highlight, #4A89DC)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* 2 */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill="none"></rect>
          <circle
            cx="12.5"
            cy="23.5"
            r="9.5"
            transform="rotate(-180 12.5 23.5)"
            fill="url(#paint0_linear_0_1128)"
          ></circle>
          <path
            d="M15.7952 25.1749H11.3735C11.1424 25.1719 10.9216 25.0787 10.7582 24.9153C10.5947 24.7518 10.5016 24.531 10.4985 24.2999V18.3266C10.4992 17.742 10.7317 17.1815 11.145 16.7681C11.5584 16.3547 12.1189 16.1222 12.7035 16.1216H15.7952C16.0263 16.1246 16.2471 16.2178 16.4106 16.3812C16.574 16.5446 16.6672 16.7655 16.6702 16.9966V24.2882C16.6714 24.5218 16.58 24.7463 16.416 24.9125C16.252 25.0787 16.0287 25.1731 15.7952 25.1749V25.1749ZM12.7035 17.8832C12.5829 17.8832 12.4671 17.9312 12.3818 18.0165C12.2965 18.1018 12.2485 18.2176 12.2485 18.3382V23.4249H14.9202V17.8832H12.7035Z"
            fill="#292D32"
          ></path>
          <path
            d="M20.2049 25.175H15.7832C15.5521 25.1719 15.3313 25.0788 15.1678 24.9153C15.0044 24.7519 14.9112 24.5311 14.9082 24.3V13.03C14.9088 12.4453 15.1413 11.8848 15.5547 11.4715C15.9681 11.0581 16.5286 10.8256 17.1132 10.825H18.8865C19.4712 10.8256 20.0316 11.0581 20.445 11.4715C20.8584 11.8848 21.0909 12.4453 21.0915 13.03V24.3C21.0885 24.5331 20.9937 24.7556 20.8277 24.9194C20.6618 25.0832 20.438 25.175 20.2049 25.175V25.175ZM17.1132 12.575C16.9925 12.575 16.8768 12.6229 16.7915 12.7082C16.7061 12.7935 16.6582 12.9093 16.6582 13.03V23.425H19.3415V13.03C19.3415 12.9093 19.2936 12.7935 19.2083 12.7082C19.1229 12.6229 19.0072 12.575 18.8865 12.575H17.1132Z"
            fill="#292D32"
          ></path>
          <path
            d="M24.6277 25.175H20.2061C19.9749 25.172 19.7541 25.0789 19.5907 24.9154C19.4272 24.752 19.3341 24.5312 19.3311 24.3V18.9917C19.3341 18.7606 19.4272 18.5398 19.5907 18.3763C19.7541 18.2129 19.9749 18.1197 20.2061 18.1167H23.2977C23.8823 18.1173 24.4428 18.3498 24.8562 18.7632C25.2696 19.1766 25.5021 19.7371 25.5027 20.3217V24.3C25.5024 24.532 25.4101 24.7544 25.2461 24.9184C25.0821 25.0824 24.8597 25.1747 24.6277 25.175V25.175ZM21.0811 19.8667V23.425H23.7527V20.3217C23.7527 20.201 23.7048 20.0853 23.6195 20C23.5341 19.9146 23.4184 19.8667 23.2977 19.8667H21.0811Z"
            fill="#292D32"
          ></path>
          <path
            d="M21.5002 30.5416H14.5002C8.16283 30.5416 5.4585 27.8373 5.4585 21.4999V14.4999C5.4585 8.16258 8.16283 5.45825 14.5002 5.45825H21.5002C27.8375 5.45825 30.5418 8.16258 30.5418 14.4999V21.4999C30.5418 27.8373 27.8375 30.5416 21.5002 30.5416ZM14.5002 7.20825C9.11716 7.20825 7.2085 9.11692 7.2085 14.4999V21.4999C7.2085 26.8829 9.11716 28.7916 14.5002 28.7916H21.5002C26.8832 28.7916 28.7918 26.8829 28.7918 21.4999V14.4999C28.7918 9.11692 26.8843 7.20825 21.5002 7.20825H14.5002Z"
            fill="#292D32"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_0_1128"
              x1="12.5"
              y1="14"
              x2="12.5"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-highlight, #4A89DC)"></stop>
              <stop
                offset="1"
                stopColor="var(--color-highlight, #4A89DC)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* 3 */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill="none"></rect>
          <circle
            cx="12.5"
            cy="23.5"
            r="9.5"
            transform="rotate(-180 12.5 23.5)"
            fill="url(#paint0_linear_0_1140)"
          ></circle>
          <path
            d="M20.3335 11.8749H15.6668C14.5457 11.8749 12.4585 11.8749 12.4585 8.66659C12.4585 5.45825 14.5457 5.45825 15.6668 5.45825H20.3335C21.4547 5.45825 23.5418 5.45825 23.5418 8.66659C23.5418 9.78775 23.5418 11.8749 20.3335 11.8749ZM15.6668 7.20825C14.5177 7.20825 14.2085 7.20825 14.2085 8.66659C14.2085 10.1249 14.5177 10.1249 15.6668 10.1249H20.3335C21.7918 10.1249 21.7918 9.81575 21.7918 8.66659C21.7918 7.20825 21.4827 7.20825 20.3335 7.20825H15.6668Z"
            fill="#292D32"
          ></path>
          <path
            d="M14.5 30.5417C7.94333 30.5417 6.625 27.5306 6.625 22.6667V15.6667C6.625 10.3467 8.55 8.07173 13.2867 7.82673C13.5183 7.81589 13.745 7.89673 13.9175 8.05177C14.09 8.2068 14.1945 8.42355 14.2083 8.65507C14.2143 8.76934 14.1975 8.88367 14.159 8.99143C14.1205 9.09919 14.061 9.19825 13.984 9.28287C13.907 9.3675 13.8139 9.43601 13.7103 9.48445C13.6066 9.53289 13.4943 9.56029 13.38 9.56507C10.0667 9.75173 8.375 10.7434 8.375 15.6667V22.6667C8.375 26.9834 9.22667 28.7917 14.5 28.7917H21.5C26.7733 28.7917 27.625 26.9834 27.625 22.6667V15.6667C27.625 10.7434 25.9333 9.75173 22.62 9.56507C22.3886 9.55091 22.172 9.44633 22.0171 9.27389C21.8621 9.10146 21.7811 8.875 21.7917 8.6434C21.8055 8.41178 21.91 8.19492 22.0824 8.0397C22.2549 7.88448 22.4815 7.80337 22.7133 7.8139C27.45 8.07057 29.375 10.3456 29.375 15.6539V22.6539C29.375 27.5306 28.0567 30.5406 21.5 30.5406L14.5 30.5417Z"
            fill="#292D32"
          ></path>
          <mask
            id="mask0_0_1140"
            maskUnits="userSpaceOnUse"
            x="11"
            y="13"
            width="14"
            height="14"
            style={{ maskType: "alpha" }}
          >
            <path
              d="M12.9905 18.4247C13.6596 16.2942 15.6503 14.7499 18.0002 14.7499C19.5171 14.7499 20.8841 15.393 21.843 16.4227C21.8977 16.4814 21.8752 16.5759 21.8011 16.6068C21.1323 16.8856 20.5663 17.1698 20.1848 17.3736C19.9702 17.4882 19.9953 17.7931 20.2216 17.8826C21.4783 18.3792 22.4267 18.8356 23.4544 19.3542C23.5672 19.4112 23.6994 19.432 23.8329 19.4049C24.1486 19.3408 24.3526 19.0329 24.2885 18.7172C24.1488 18.0287 23.8988 17.3802 23.5581 16.7912C22.4495 14.8747 20.376 13.5833 18.0002 13.5833C15.1262 13.5833 12.6949 15.4723 11.8774 18.0751C11.7809 18.3825 11.9518 18.7099 12.2591 18.8064C12.5665 18.903 12.8939 18.7321 12.9905 18.4247Z"
              fill="black"
            ></path>
            <path
              d="M23.01 21.5752C22.3409 23.7057 20.3502 25.25 18.0003 25.25C16.4835 25.25 15.1164 24.6069 14.1575 23.5772C14.1028 23.5185 14.1254 23.4241 14.1994 23.3932C14.8682 23.1144 15.4342 22.8302 15.8157 22.6264C16.0303 22.5117 16.0052 22.2068 15.779 22.1174C14.5222 21.6207 13.5738 21.1644 12.5461 20.6457C12.4333 20.5888 12.3011 20.5679 12.1676 20.595C11.8519 20.6591 11.6479 20.967 11.712 21.2827C11.8517 21.9713 12.1017 22.6198 12.4424 23.2088C13.551 25.1252 15.6245 26.4167 18.0003 26.4167C20.8743 26.4167 23.3056 24.5276 24.1231 21.9248C24.2196 21.6175 24.0487 21.29 23.7414 21.1935C23.434 21.097 23.1066 21.2679 23.01 21.5752Z"
              fill="black"
            ></path>
          </mask>
          <g mask="url(#mask0_0_1140)">
            <rect x="11" y="13" width="14" height="14" fill="black"></rect>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_0_1140"
              x1="12.5"
              y1="14"
              x2="12.5"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-highlight, #4A89DC)"></stop>
              <stop
                offset="1"
                stopColor="var(--color-highlight, #4A89DC)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* 4 */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill="none"></rect>
          <circle
            cx="12.5"
            cy="23.5"
            r="9.5"
            transform="rotate(-180 12.5 23.5)"
            fill="url(#paint0_linear_0_1147)"
          ></circle>
          <path
            d="M24.713 13.1117C24.6645 13.1117 24.6161 13.1074 24.5683 13.0988C24.3248 13.0651 24.0791 13.0495 23.8333 13.0522H12.1666C11.8935 13.0534 11.6207 13.0725 11.35 13.1093H11.2216C11.0832 13.109 10.9467 13.0761 10.8233 13.0132C10.6998 12.9504 10.5929 12.8594 10.5111 12.7477C10.4149 12.618 10.3572 12.4638 10.3448 12.3028C10.3324 12.1418 10.3658 11.9805 10.4411 11.8377C10.6538 11.4178 10.9359 11.0367 11.2753 10.7107L15.067 6.90733C16.0018 5.98256 17.2637 5.46387 18.5786 5.46387C19.8936 5.46387 21.1555 5.98256 22.0903 6.90733L24.132 8.984C25.0013 9.83291 25.518 10.9788 25.5786 12.1923C25.5848 12.3108 25.5669 12.4293 25.5259 12.5407C25.4849 12.6521 25.4218 12.754 25.3403 12.8402C25.2589 12.9265 25.1608 12.9953 25.0519 13.0426C24.9431 13.0898 24.8258 13.1145 24.7071 13.1152L24.713 13.1117ZM18.5763 7.2025C17.723 7.20056 16.9036 7.53606 16.2966 8.13583L13.1711 11.294H23.6233C23.4618 10.8851 23.2157 10.515 22.9011 10.2078L20.842 8.13C20.2394 7.53297 19.4246 7.19941 18.5763 7.2025Z"
            fill="#292D32"
          ></path>
          <path
            d="M9.83321 31.7084C8.8777 31.7089 7.93852 31.4606 7.10803 30.9881C6.27753 30.5156 5.58432 29.8351 5.09654 29.0134C4.56681 28.1587 4.28788 27.1723 4.29154 26.1668C4.29164 24.6971 4.87554 23.2876 5.91479 22.2485C6.95405 21.2093 8.36353 20.6255 9.83321 20.6255C11.3029 20.6255 12.7124 21.2093 13.7516 22.2485C14.7909 23.2876 15.3748 24.6971 15.3749 26.1668C15.3768 27.1758 15.0981 28.1654 14.5699 29.0251C14.0799 29.8439 13.3858 30.5215 12.5556 30.9918C11.7254 31.4621 10.7874 31.709 9.83321 31.7084ZM9.83321 22.3751C8.82797 22.3763 7.86426 22.7762 7.15346 23.487C6.44265 24.1978 6.04277 25.1615 6.04154 26.1668C6.03878 26.8547 6.22873 27.5296 6.58987 28.1151C6.92469 28.6761 7.39913 29.1407 7.96695 29.4638C8.53478 29.7868 9.17662 29.9572 9.8299 29.9584C10.4832 29.9596 11.1256 29.7915 11.6946 29.4705C12.2636 29.1495 12.7397 28.6865 13.0765 28.1268C13.4379 27.5371 13.6278 26.8584 13.6249 26.1668C13.6236 25.1615 13.2238 24.1978 12.513 23.487C11.8021 22.7762 10.8384 22.3763 9.83321 22.3751Z"
            fill="#292D32"
          ></path>
          <path
            d="M8.09521 27.0183C7.86362 27.0168 7.64195 26.9241 7.47819 26.7603C7.31442 26.5966 7.22174 26.3749 7.22021 26.1433C7.22174 25.9117 7.31442 25.69 7.47819 25.5263C7.64195 25.3625 7.86362 25.2698 8.09521 25.2683H11.5835C11.8151 25.2698 12.0368 25.3625 12.2006 25.5263C12.3643 25.69 12.457 25.9117 12.4585 26.1433C12.4561 26.3766 12.3615 26.5995 12.1954 26.7634C12.0293 26.9273 11.8052 27.0189 11.5719 27.0183H8.09521Z"
            fill="#292D32"
          ></path>
          <path
            d="M8.9585 27.9283V24.4399C8.96002 24.2083 9.0527 23.9867 9.21647 23.8229C9.38023 23.6591 9.6019 23.5665 9.8335 23.5649C10.0651 23.5665 10.2868 23.6591 10.4505 23.8229C10.6143 23.9867 10.707 24.2083 10.7085 24.4399V27.9283C10.7085 28.1603 10.6163 28.3829 10.4522 28.547C10.2881 28.7111 10.0656 28.8033 9.8335 28.8033C9.60143 28.8033 9.37887 28.7111 9.21478 28.547C9.05068 28.3829 8.9585 28.1603 8.9585 27.9283Z"
            fill="#292D32"
          ></path>
          <path
            d="M23.8333 30.5418H12.9017C12.7221 30.5412 12.5468 30.4863 12.399 30.3842C12.2511 30.2822 12.1376 30.1379 12.0733 29.9701C12.0112 29.8019 12.0025 29.6186 12.0484 29.4453C12.0943 29.272 12.1927 29.1171 12.33 29.0018C12.6193 28.7576 12.864 28.4651 13.0533 28.1373C13.4206 27.55 13.6147 26.8711 13.6133 26.1784C13.6143 25.4074 13.3798 24.6545 12.9413 24.0203C12.5028 23.3861 11.8811 22.9008 11.1595 22.6294C10.4378 22.358 9.65046 22.3133 8.90271 22.5014C8.15496 22.6894 7.48243 23.1013 6.97502 23.6818C6.8904 23.7753 6.7873 23.8502 6.67223 23.9018C6.55716 23.9535 6.43263 23.9806 6.30652 23.9816C6.20406 23.9818 6.10245 23.9632 6.00668 23.9268C5.84005 23.8643 5.69625 23.7529 5.5942 23.6071C5.49216 23.4613 5.43666 23.2881 5.43502 23.1101V18.0001C5.34266 16.3793 5.87957 14.7854 6.93376 13.5508C7.98796 12.3162 9.47807 11.5362 11.0933 11.3734C11.4409 11.3203 11.7918 11.293 12.1433 11.2918H23.81C24.1497 11.2887 24.489 11.3121 24.825 11.3618C26.4514 11.5096 27.956 12.2857 29.0191 13.5253C30.0823 14.7649 30.6201 16.3702 30.5183 18.0001V23.8334C30.5554 24.7231 30.4132 25.6111 30.1001 26.4447C29.7871 27.2782 29.3096 28.0403 28.696 28.6856C28.0513 29.3052 27.2886 29.7887 26.4532 30.1076C25.6179 30.4265 24.7269 30.5741 23.8333 30.5418ZM9.83335 20.6251C10.7924 20.6237 11.7354 20.8716 12.5698 21.3444C13.4042 21.8173 14.1014 22.4988 14.5931 23.3222C15.0849 24.1456 15.3541 25.0827 15.3746 26.0415C15.3951 27.0004 15.1661 27.9481 14.71 28.7918H23.8333C24.4965 28.838 25.1618 28.7413 25.7844 28.5084C26.407 28.2755 26.9724 27.9117 27.4423 27.4416C27.9123 26.9715 28.276 26.406 28.5088 25.7834C28.7415 25.1607 28.838 24.4954 28.7917 23.8323V17.9989C28.8811 16.7938 28.4914 15.602 27.7071 14.6826C26.9229 13.7631 25.8075 13.1902 24.6033 13.0884C24.3481 13.051 24.0901 13.0354 23.8322 13.0418H12.1655C11.8923 13.0431 11.6195 13.0622 11.3488 13.0989C10.1555 13.2134 9.05422 13.7901 8.28033 14.7057C7.50644 15.6213 7.12129 16.8032 7.20718 17.9989V21.2901C8.01354 20.8532 8.91624 20.6246 9.83335 20.6251Z"
            fill="#292D32"
          ></path>
          <path
            d="M26.1668 24.1249C25.3159 24.1249 24.4999 23.7869 23.8982 23.1852C23.2965 22.5835 22.9585 21.7675 22.9585 20.9166C22.9585 20.0657 23.2965 19.2496 23.8982 18.648C24.4999 18.0463 25.3159 17.7083 26.1668 17.7083H29.6668C29.8984 17.7098 30.1201 17.8025 30.2839 17.9662C30.4476 18.13 30.5403 18.3517 30.5418 18.5833C30.5403 18.8148 30.4476 19.0365 30.2839 19.2003C30.1201 19.364 29.8984 19.4567 29.6668 19.4583H26.1668C25.7801 19.4583 25.4091 19.6119 25.1356 19.8854C24.8621 20.1589 24.7085 20.5298 24.7085 20.9166C24.7085 21.3034 24.8621 21.6743 25.1356 21.9478C25.4091 22.2213 25.7801 22.3749 26.1668 22.3749H29.6668C29.8989 22.3749 30.1215 22.4671 30.2855 22.6312C30.4496 22.7953 30.5418 23.0179 30.5418 23.2499C30.5418 23.482 30.4496 23.7045 30.2855 23.8686C30.1215 24.0327 29.8989 24.1249 29.6668 24.1249H26.1668Z"
            fill="#292D32"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_0_1147"
              x1="12.5"
              y1="14"
              x2="12.5"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-highlight, #4A89DC)"></stop>
              <stop
                offset="1"
                stopColor="var(--color-highlight, #4A89DC)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* 5 */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill="none"></rect>
          <circle
            cx="12.5"
            cy="23.5"
            r="9.5"
            transform="rotate(-180 12.5 23.5)"
            fill="url(#paint0_linear_0_1136)"
          ></circle>
          <path
            d="M15.971 21.4417L13.1476 18.6184C13.0617 18.5383 12.9927 18.4417 12.9449 18.3343C12.8971 18.227 12.8713 18.1111 12.8693 17.9937C12.8672 17.8762 12.8888 17.7595 12.9328 17.6505C12.9768 17.5416 13.0423 17.4426 13.1254 17.3595C13.2085 17.2764 13.3075 17.2109 13.4164 17.1669C13.5254 17.1229 13.6421 17.1013 13.7596 17.1034C13.8771 17.1054 13.9929 17.1311 14.1003 17.179C14.2076 17.2268 14.3042 17.2957 14.3843 17.3817L16.5893 19.5867L21.606 14.57C21.7718 14.4155 21.9912 14.3313 22.2179 14.3353C22.4446 14.3393 22.6609 14.4312 22.8212 14.5915C22.9815 14.7518 23.0733 14.9681 23.0773 15.1948C23.0813 15.4215 22.9972 15.6408 22.8426 15.8067L17.21 21.4417C17.1289 21.5231 17.0325 21.5877 16.9264 21.6318C16.8203 21.6759 16.7065 21.6986 16.5916 21.6986C16.4767 21.6986 16.363 21.6759 16.2569 21.6318C16.1507 21.5877 16.0544 21.5231 15.9733 21.4417H15.971Z"
            fill="#292D32"
          ></path>
          <path
            d="M18.0012 30.5416C17.2548 30.5477 16.5308 30.287 15.9595 29.8066L14.1162 28.2199C13.8522 28.0311 13.5415 27.9181 13.2178 27.8933H11.2112C10.3822 27.8923 9.58747 27.5626 9.00131 26.9764C8.41515 26.3903 8.08544 25.5955 8.08451 24.7666V22.7716C8.05863 22.4517 7.94566 22.1451 7.75784 21.8849L6.18284 20.0299C5.71746 19.458 5.46338 18.7431 5.46338 18.0058C5.46338 17.2684 5.71746 16.5535 6.18284 15.9816L7.75784 14.1266C7.94566 13.8664 8.05863 13.5598 8.08451 13.2399V11.2333C8.08544 10.4043 8.41515 9.60955 9.00131 9.02339C9.58747 8.43722 10.3822 8.10751 11.2112 8.10659H13.2295C13.5518 8.07555 13.8609 7.96315 14.1278 7.77992L15.9712 6.19325C16.5431 5.71841 17.2631 5.4585 18.0064 5.4585C18.7498 5.4585 19.4697 5.71841 20.0417 6.19325L21.885 7.77992C22.1486 7.96868 22.4589 8.08165 22.7822 8.10659H24.7655C25.5945 8.10751 26.3892 8.43722 26.9754 9.02339C27.5615 9.60955 27.8913 10.4043 27.8922 11.2333V13.2166C27.9224 13.541 28.0392 13.8512 28.2305 14.1149L29.8195 15.9583C30.294 16.5306 30.5537 17.2506 30.5537 17.9941C30.5537 18.7375 30.294 19.4576 29.8195 20.0299L28.2328 21.8733C28.042 22.1372 27.9251 22.4473 27.8945 22.7716V24.7549C27.8936 25.5839 27.5639 26.3786 26.9777 26.9648C26.3915 27.5509 25.5968 27.8807 24.7678 27.8816H22.7845C22.4626 27.9127 22.1539 28.0251 21.8873 28.2083L20.044 29.7949C19.4765 30.2839 18.7502 30.5493 18.0012 30.5416ZM11.2112 9.85659C10.8462 9.85689 10.4962 10.002 10.2381 10.2601C9.97996 10.5183 9.83482 10.8682 9.83451 11.2333V13.2283C9.80891 13.9638 9.5471 14.6715 9.08784 15.2466L7.51284 17.1016C7.3155 17.3573 7.20846 17.6711 7.20846 17.9941C7.20846 18.3171 7.3155 18.6309 7.51284 18.8866L9.08784 20.7416C9.54393 21.3185 9.80535 22.0251 9.83451 22.7599V24.7549C9.83482 25.1199 9.97996 25.4699 10.2381 25.728C10.4962 25.9861 10.8462 26.1313 11.2112 26.1316H13.2295C13.9744 26.1576 14.6909 26.4236 15.2723 26.8899L17.1145 28.4766C17.372 28.6753 17.6881 28.7832 18.0134 28.7832C18.3387 28.7832 18.6548 28.6753 18.9123 28.4766L20.7557 26.8899C21.3391 26.428 22.0538 26.1626 22.7973 26.1316H24.7807C25.1458 26.1313 25.4959 25.9862 25.7542 25.7281C26.0125 25.47 26.1579 25.12 26.1585 24.7549V22.7716C26.1848 22.0271 26.4508 21.311 26.9168 20.7299L28.5035 18.8866C28.7022 18.6293 28.8099 18.3133 28.8099 17.9883C28.8099 17.6632 28.7022 17.3472 28.5035 17.0899L26.9168 15.2466C26.4507 14.6655 26.1847 13.9494 26.1585 13.2049V11.2333C26.1579 10.8681 26.0125 10.5181 25.7542 10.2601C25.4959 10.002 25.1458 9.85689 24.7807 9.85659H22.7973C22.0529 9.83032 21.3368 9.56434 20.7557 9.09825L18.9123 7.51158C18.6548 7.31282 18.3387 7.20501 18.0134 7.20501C17.6881 7.20501 17.372 7.31282 17.1145 7.51158L15.2712 9.10992C14.6862 9.5683 13.9711 9.82968 13.2283 9.85659H11.2112Z"
            fill="#292D32"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_0_1136"
              x1="12.5"
              y1="14"
              x2="12.5"
              y2="33"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-highlight, #4A89DC)"></stop>
              <stop
                offset="1"
                stopColor="var(--color-highlight, #4A89DC)"
                stopOpacity="0"
              ></stop>
            </linearGradient>
          </defs>
        </svg>
        {/* 6 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 6C2 3.79086 3.79086 2 6 2H15L10 22H6C3.79086 22 2 20.2091 2 18V6Z"
            fill="var(--color-highlight, #4A89DC)"
          ></path>
          <path
            d="M9 22.75H15C20.432 22.75 22.75 20.432 22.75 15V9C22.75 3.568 20.432 1.25 15 1.25H9C3.568 1.25 1.25 3.568 1.25 9V15C1.25 20.432 3.568 22.75 9 22.75ZM15 2.75C19.614 2.75 21.25 4.386 21.25 9V15C21.25 19.614 19.614 21.25 15 21.25H9C4.386 21.25 2.75 19.614 2.75 15V9C2.75 4.386 4.385 2.75 9 2.75H15Z"
            fill="#292D32"
          ></path>
          <path
            d="M10.78 22.181L15.73 2.18098C15.7766 1.98744 15.745 1.78332 15.642 1.61295C15.539 1.44258 15.373 1.31969 15.18 1.27098C15.0841 1.24681 14.9844 1.24189 14.8866 1.25651C14.7888 1.27112 14.6948 1.30498 14.6102 1.35613C14.5256 1.40728 14.452 1.4747 14.3935 1.55449C14.3351 1.63428 14.2931 1.72485 14.27 1.82098L9.31997 21.821C9.27336 22.0145 9.30498 22.2186 9.40795 22.389C9.51092 22.5594 9.67694 22.6823 9.86997 22.731C9.92931 22.7426 9.98952 22.7493 10.05 22.751C10.2176 22.7502 10.3802 22.6938 10.5123 22.5907C10.6444 22.4875 10.7386 22.3434 10.78 22.181Z"
            fill="#292D32"
          ></path>
          <path
            d="M22.72 15.21C22.7481 15.1154 22.7572 15.0162 22.7468 14.9182C22.7363 14.8201 22.7065 14.725 22.6591 14.6385C22.6116 14.552 22.5475 14.4758 22.4705 14.4143C22.3934 14.3527 22.3048 14.3071 22.21 14.28L12.68 11.5C12.5855 11.4718 12.4863 11.4627 12.3882 11.4732C12.2901 11.4837 12.1951 11.5135 12.1086 11.5609C12.0221 11.6083 11.9459 11.6724 11.8843 11.7495C11.8228 11.8266 11.7771 11.9151 11.75 12.01C11.7219 12.1045 11.7128 12.2037 11.7232 12.3018C11.7337 12.3999 11.7635 12.4949 11.8109 12.5814C11.8584 12.6679 11.9225 12.7441 11.9996 12.8057C12.0766 12.8672 12.1652 12.9129 12.26 12.94L21.79 15.72C21.8583 15.7397 21.9289 15.7498 22 15.75C22.1624 15.7505 22.3205 15.698 22.4505 15.6006C22.5804 15.5031 22.675 15.366 22.72 15.21Z"
            fill="#292D32"
          ></path>
        </svg>
        {/* 7 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7C19 8.10457 18.1046 9 17 9L8.52924 9C7.88333 9 7.27719 8.68807 6.90177 8.16248L5.83034 6.66248C5.33363 5.96708 5.33363 5.03292 5.83034 4.33752L6.90177 2.83752C7.27719 2.31193 7.88333 2 8.52924 2L17 2C18.1046 2 19 2.89543 19 4L19 7Z"
            fill=""
          ></path>
          <path
            d="M17.2196 9.75H8.95959C8.39179 9.75165 7.8408 9.55739 7.39959 9.2L5.20959 7.45C4.91608 7.21682 4.67907 6.92031 4.5163 6.58264C4.35352 6.24496 4.26918 5.87486 4.26959 5.5C4.26697 5.12477 4.35032 4.75392 4.51326 4.4159C4.67621 4.07788 4.91441 3.78167 5.20959 3.55L7.39959 1.8C7.84282 1.44623 8.39249 1.25243 8.95959 1.25H17.2196C17.8826 1.25 18.5185 1.51339 18.9874 1.98223C19.4562 2.45107 19.7196 3.08696 19.7196 3.75V7.25C19.7196 7.91304 19.4562 8.54893 18.9874 9.01777C18.5185 9.48661 17.8826 9.75 17.2196 9.75ZM8.95959 2.75C8.73374 2.74962 8.51469 2.82734 8.33959 2.97L6.14959 4.72C6.0313 4.81271 5.93564 4.93111 5.86985 5.06624C5.80407 5.20138 5.76989 5.3497 5.76989 5.5C5.76989 5.6503 5.80407 5.79862 5.86985 5.93376C5.93564 6.06889 6.0313 6.18729 6.14959 6.28L8.33959 8.03C8.51618 8.17 8.73426 8.24738 8.95959 8.25H17.2196C17.4848 8.25 17.7392 8.14464 17.9267 7.95711C18.1142 7.76957 18.2196 7.51522 18.2196 7.25V3.75C18.2196 3.48478 18.1142 3.23043 17.9267 3.04289C17.7392 2.85536 17.4848 2.75 17.2196 2.75H8.95959Z"
            fill="#292D32"
          ></path>
          <path
            d="M5 14C5 12.8954 5.89543 12 7 12H15.4708C16.1167 12 16.7228 12.3119 17.0982 12.8375L18.1697 14.3375C18.6664 15.0329 18.6664 15.9671 18.1697 16.6625L17.0982 18.1625C16.7228 18.6881 16.1167 19 15.4708 19H7C5.89543 19 5 18.1046 5 17V14Z"
            fill=""
          ></path>
          <path
            d="M15.0608 19.75H6.80078C6.13774 19.75 5.50186 19.4866 5.03301 19.0178C4.56417 18.5489 4.30078 17.9131 4.30078 17.25V13.75C4.30078 13.087 4.56417 12.4511 5.03301 11.9822C5.50186 11.5134 6.13774 11.25 6.80078 11.25H15.0608C15.6286 11.2484 16.1796 11.4426 16.6208 11.8L18.8108 13.55C19.1045 13.783 19.3416 14.0795 19.5044 14.4172C19.6672 14.7549 19.7514 15.1251 19.7508 15.5C19.7534 15.8752 19.6701 16.2461 19.5071 16.5841C19.3442 16.9221 19.106 17.2183 18.8108 17.45L16.6208 19.2C16.1796 19.5574 15.6286 19.7517 15.0608 19.75ZM6.80078 12.75C6.53556 12.75 6.28121 12.8554 6.09367 13.0429C5.90614 13.2304 5.80078 13.4848 5.80078 13.75V17.25C5.80078 17.5152 5.90614 17.7696 6.09367 17.9571C6.28121 18.1447 6.53556 18.25 6.80078 18.25H15.0608C15.2864 18.2509 15.5053 18.1731 15.6798 18.03L17.8708 16.28C17.9891 16.1873 18.0847 16.0689 18.1505 15.9338C18.2163 15.7986 18.2505 15.6503 18.2505 15.5C18.2505 15.3497 18.2163 15.2014 18.1505 15.0663C18.0847 14.9311 17.9891 14.8127 17.8708 14.72L15.6808 12.97C15.5043 12.8305 15.2867 12.7531 15.0618 12.75H6.80078Z"
            fill="#292D32"
          ></path>
          <path
            d="M11.25 12V9C11.2513 8.80149 11.3307 8.61149 11.4711 8.47112C11.6115 8.33075 11.8015 8.25131 12 8.25C12.1985 8.25131 12.3885 8.33075 12.5289 8.47112C12.6693 8.61149 12.7487 8.80149 12.75 9V12C12.7487 12.1985 12.6693 12.3885 12.5289 12.5289C12.3885 12.6693 12.1985 12.7487 12 12.75C11.8015 12.7487 11.6115 12.6693 11.4711 12.5289C11.3307 12.3885 11.2513 12.1985 11.25 12ZM11.25 22V19C11.2513 18.8015 11.3307 18.6115 11.4711 18.4711C11.6115 18.3307 11.8015 18.2513 12 18.25C12.1985 18.2513 12.3885 18.3307 12.5289 18.4711C12.6693 18.6115 12.7487 18.8015 12.75 19V22C12.7487 22.1985 12.6693 22.3885 12.5289 22.5289C12.3885 22.6693 12.1985 22.7487 12 22.75C11.8015 22.7487 11.6115 22.6693 11.4711 22.5289C11.3307 22.3885 11.2513 22.1985 11.25 22Z"
            fill="#292D32"
          ></path>
          <path
            d="M9 22.75C8.80149 22.7487 8.61149 22.6693 8.47112 22.5289C8.33075 22.3885 8.25131 22.1985 8.25 22C8.25131 21.8015 8.33075 21.6115 8.47112 21.4711C8.61149 21.3307 8.80149 21.2513 9 21.25H15C15.1985 21.2513 15.3885 21.3307 15.5289 21.4711C15.6693 21.6115 15.7487 21.8015 15.75 22C15.7487 22.1985 15.6693 22.3885 15.5289 22.5289C15.3885 22.6693 15.1985 22.7487 15 22.75H9Z"
            fill="#292D32"
          ></path>
        </svg>
        {/* 8 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6.5L11.5 8H12.5L17.5 6.5L18.5 7V15L17.5 16L11.5 18L5.5 15.5L6 7L8 6.5Z"
            fill=""
          ></path>
          <path
            d="M15 22.75H9C3.568 22.75 1.25 20.432 1.25 15V9C1.25 3.568 3.568 1.25 9 1.25H15C20.432 1.25 22.75 3.568 22.75 9V15C22.75 20.432 20.432 22.75 15 22.75ZM9 2.75C4.386 2.75 2.75 4.386 2.75 9V15C2.75 19.614 4.386 21.25 9 21.25H15C19.614 21.25 21.25 19.614 21.25 15V9C21.25 4.386 19.615 2.75 15 2.75H9Z"
            fill="#292D32"
          ></path>
          <path
            d="M12.0001 18.95C11.7629 18.9505 11.5292 18.8921 11.3201 18.78C9.90296 18.0632 8.38596 17.564 6.82012 17.299L6.63012 17.269C6.14449 17.2011 5.69948 16.9608 5.37636 16.5919C5.05324 16.2231 4.87355 15.7503 4.87012 15.26V7.55999C4.86972 7.27874 4.92722 7.00042 5.03905 6.74236C5.15087 6.4843 5.31463 6.25202 5.52012 6.05999C5.88967 5.71914 6.37438 5.53054 6.87712 5.53199C6.93712 5.53199 6.99912 5.53199 7.06012 5.53999C8.76223 5.73907 10.4058 6.28352 11.8901 7.13999L11.9901 7.19899L12.0311 7.16899C13.521 6.30451 15.1705 5.75039 16.8801 5.53999H16.9801C17.0331 5.53199 17.0871 5.53199 17.1411 5.53199C17.6338 5.53931 18.1067 5.72718 18.4701 6.05999C18.6777 6.24806 18.8429 6.47803 18.955 6.73471C19.067 6.99139 19.1233 7.26894 19.1201 7.54899V15.239C19.1127 15.7297 18.9305 16.2017 18.6062 16.5702C18.282 16.9386 17.8369 17.1793 17.3511 17.249L17.1401 17.279C15.5798 17.5406 14.0689 18.0401 12.6601 18.76C12.4666 18.8934 12.2349 18.9601 12.0001 18.95ZM6.89012 7.04899C6.76168 7.04746 6.63726 7.09381 6.54112 7.17899C6.48809 7.22876 6.44636 7.28933 6.41876 7.35661C6.39115 7.42389 6.37832 7.49632 6.38112 7.56899V15.269C6.38879 15.393 6.43699 15.511 6.51829 15.605C6.59959 15.6989 6.7095 15.7636 6.83112 15.789L7.02112 15.819C8.76136 16.1087 10.4473 16.6617 12.0211 17.459C13.5644 16.6481 15.2296 16.0942 16.9511 15.819L17.1711 15.789C17.2927 15.7634 17.4025 15.6987 17.4838 15.6048C17.565 15.5109 17.6133 15.3929 17.6211 15.269V7.57999C17.6224 7.50752 17.6088 7.43556 17.5813 7.3685C17.5538 7.30144 17.5129 7.2407 17.4611 7.18999C17.3613 7.10156 17.2314 7.05468 17.0981 7.05899H16.9501C15.5024 7.25365 14.1066 7.72922 12.8411 8.45899L12.7411 8.51899C12.5126 8.65295 12.252 8.7221 11.9871 8.71899C11.7322 8.72431 11.4808 8.65963 11.2601 8.53199L11.1101 8.44199C9.8258 7.70672 8.4085 7.23327 6.94012 7.04899H6.89012Z"
            fill="#292D32"
          ></path>
          <path
            d="M11.25 17.66V8.09998C11.2513 7.90147 11.3307 7.71146 11.4711 7.57109C11.6115 7.43072 11.8015 7.35129 12 7.34998C12.1985 7.35129 12.3885 7.43072 12.5289 7.57109C12.6693 7.71146 12.7487 7.90147 12.75 8.09998V17.66C12.75 17.8589 12.671 18.0497 12.5303 18.1903C12.3897 18.331 12.1989 18.41 12 18.41C11.8011 18.41 11.6103 18.331 11.4697 18.1903C11.329 18.0497 11.25 17.8589 11.25 17.66Z"
            fill="#292D32"
          ></path>
        </svg>
        {/* 9 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"></path>
          <path
            d="M19.256 4.7681C17.4233 3.05124 14.9594 2 12.25 2C6.58908 2 2 6.58908 2 12.25C2 17.9109 6.58908 22.5 12.25 22.5C15.0574 22.5 17.6012 21.3713 19.4524 19.543L12 12L19.256 4.7681Z"
            fill=""
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></path>
          <path
            d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.5 6.5V10.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.5 8.5H10.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        {/* 10 */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 4L12.5 2.5L15 3.5L16 5.5L17.5 6.5L19 7.5L20.5 9.5L21.5 11.5V14L19.5 18.5L16.5 19L14 18.5H11.5L6 19L3.5 17.5L2.5 12.5L3.5 8.5L7.5 4Z"
            fill=""
          ></path>
          <path
            d="M17.1666 5.51887C16.778 5.31991 16.4711 4.98928 16.3045 4.58259C15.7405 3.20158 14.7674 2.15997 13.2157 1.95223C13.128 1.9376 12.827 1.92004 12.4121 1.92004C12.2367 1.92004 12.0439 1.92297 11.8364 1.92882C11.8218 1.92882 11.8042 1.93175 11.7896 1.93175L11.3367 1.99026C11.3191 1.99319 11.2987 1.99612 11.2812 2.00197C4.74696 3.6346 1.36589 8.69929 1.99418 14.2643C2.41499 17.9743 4.4898 19.7357 7.79489 19.7357C9.03393 19.7357 10.4454 19.487 12.003 19.0042C13.5722 19.5338 14.9924 19.8 16.2373 19.8C19.5161 19.8 21.5939 17.9597 22.0117 14.2643C22.4559 10.3202 20.7172 7.34461 17.1666 5.51887ZM12.0234 17.711L11.6611 17.8807C10.2087 18.3313 8.9112 18.5595 7.79781 18.5595C7.09647 18.5595 6.46818 18.4688 5.92756 18.2874C5.41616 18.1147 4.97198 17.8602 4.60669 17.5237C3.8206 16.801 3.33258 15.657 3.16017 14.1268C3.0199 12.8862 3.0988 11.672 3.39687 10.5163C3.69202 9.36931 4.19757 8.30137 4.89892 7.34461C6.38051 5.31991 8.67157 3.86867 11.5266 3.14891L11.9094 3.09917C12.076 3.09332 12.2455 3.09039 12.4121 3.09039C12.7657 3.09039 13.0111 3.1021 13.0725 3.11087C13.5751 3.17817 13.993 3.37128 14.3525 3.69312C14.7031 4.00912 14.9954 4.45677 15.2262 5.02147C15.4951 5.68271 15.9948 6.22693 16.6377 6.55462C19.82 8.19019 21.2373 10.7386 20.8574 14.1297C20.685 15.6658 20.1941 16.8186 19.4051 17.5618C18.6511 18.2698 17.5903 18.6268 16.2432 18.6268C15.3899 18.6268 14.4314 18.4805 13.3852 18.1967C13.5459 18.1001 13.7096 17.9919 13.8732 17.8748C15.4016 16.7718 16.1877 15.2825 16.1438 13.5709C16.138 13.328 15.9363 13.1378 15.6938 13.1437C15.4512 13.1495 15.2613 13.3514 15.2671 13.5943C15.3022 15.0162 14.4752 16.1193 13.2011 17.0761C12.9673 17.2516 12.0234 17.711 12.0234 17.711Z"
            fill="black"
          ></path>
          <path
            d="M16.3588 19.0155C16.6439 19.6964 16.7632 20.4638 16.6963 21.2658C15.2852 21.3783 13.9816 20.9369 13.0622 20.0281C12.8993 19.8666 12.7509 19.6906 12.617 19.506C12.8585 19.0357 13.0331 18.5308 13.1349 18C12.5239 18.3866 11.7994 18.7039 10.9964 18.9117C11.072 19.1165 11.1593 19.3127 11.2582 19.506C11.1244 19.6906 10.976 19.8666 10.8131 20.0281C9.98965 20.8446 8.8549 21.2831 7.60958 21.2831C7.46701 21.2831 7.32444 21.2773 7.17896 21.2658C7.11495 20.4696 7.22842 19.7079 7.51065 19.0328C7.10913 18.9463 6.7396 18.8251 6.405 18.6693C6.01802 19.6416 5.90163 20.7407 6.08494 21.8774C6.12277 22.1227 6.32062 22.3159 6.56794 22.3563C6.92 22.4111 7.27206 22.44 7.6154 22.44C9.16623 22.44 10.5948 21.8832 11.6394 20.8475C11.7441 20.7436 11.846 20.634 11.942 20.5215C12.038 20.634 12.1369 20.7436 12.2417 20.8475C13.2862 21.8832 14.7149 22.44 16.2657 22.44C16.609 22.44 16.9611 22.414 17.3132 22.3563C17.5605 22.3188 17.7554 22.1227 17.7962 21.8774C17.9736 20.7725 17.866 19.7021 17.5052 18.7501C17.1677 18.9059 16.7749 19.004 16.3588 19.0155Z"
            fill="black"
          ></path>
        </svg>
        {/* 11 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="40"
          height="40"
        >
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </div>
    </>
  );
}

export default App;
