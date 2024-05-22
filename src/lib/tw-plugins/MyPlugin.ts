import plugin from "tailwindcss/plugin";

export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--neutral": "255,255,255",
        "--neutral-revert": "30,41,59",
        "--neutral-hover": "63,63,70",
        "--primary": "7,116,255", // #0774FF 
        "--primary-text": "255,255,255", // #fff
        "--primary-hover": "3,58,167",// #033AA7 
        "--secondery": "255,193,7",
        "--secondery-text": "45,60,88",
        "--secondery-hover": "100,100,230",
        "--alert": "200,50,50",
        "--alert-hover": "220,70,70",
        "--success": "110,231,183",//? emerald 300
        "--success-hover": "130,251,203",
        "--info": "8,145,178", //? cyan 600 
        "--info-hover": "28,165,198",
        "--warn": "245,158,11",
        "--warn-hover": "245,178,31"

      },
      "::-ms-reveal": {
        filter: "invert(100%)"
      }
    });
    addBase({

      body: {
        "@apply bg-neutral  h-svh text-neutral-revert": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',

      },
      h1: { "@apply capitalize text-2xl": {} },
      h2: { "@apply capitalize text-xl": {} },
      h3: { "@apply capitalize text-lg": {} },
      h4: { "@apply capitalize text-base": {} },
      p: { "@apply text-sm": {} },
      li: { "@apply list-none": {} },
      // a: { "@apply !text-current": {} },

    });
    addUtilities({
      ".remove-scroll-bar": {
        "scroll-behavior": "smooth",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      ".remove-scroll-bar::-webkit-scrollbar": {
        display: "none",
      },
      ".text-border": {
        "text-shadow":
          `-1px -1px 0 rgb(var(--neutral-revert)),
            1px -1px 0 rgb(var(--neutral-revert)),
           -1px 1px 0 rgb(var(--neutral-revert)),
            1px 1px 0 rgb(var(--neutral-revert))`
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          neutral: "rgb(var(--neutral),<alpha-value>)",
          "neutral-revert": "rgb(var(--neutral-revert),<alpha-value>)",
          primary: "rgb(var(--primary),<alpha-value>)",
          "primary-text": "rgb(var(--primary-text),<alpha-value>)",
          "primary-hover": "rgb(var(--primary-hover),<alpha-value>)",
          secondery: "rgb(var(--secondery),<alpha-value>)",
          "secondery-text": "rgb(var(--secondery-text),<alpha-value>)",
          "secondery-hover": "rgb(var(--secondery-hover),<alpha-value>)",
          alert: "rgb(var(--alert),<alpha-value>)",
          "alert-hover": "rgb(var(--alert-hover),<alpha-value>)",
          success: "rgb(var(--success),<alpha-value>)",
          "success-hover": "rgb(var(--success-hover),<alpha-value>)",
          info: "rgb(var(--info),<alpha-value>)",
          "info-hover": "rgb(var(--info-hover),<alpha-value>)",
          warn: "rgb(var(--warn),<alpha-value>)",
          "warn-hover": "rgb(var(--warn-hover),<alpha-value>)",
        },
        screens: {
          mn: "420px",
          xs: "576px",
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        animation: {
          reset: "reset var(--reset-duration) infinite var(--reset-delay)",
          fadein:
            "fadein var(--fadein-duration,0.3s) forwards  var(--fadein-delay,0s)",
          fadeout:
            "fadeout var(--fadeout-duration,0.3s) forwards var(--fadeout-delay,0s)",
          buzz: "buzz 2s infinite linear  ",
          shake: "shake 5s infinite linear  ",
          slideDown: "slideDown 0.3s forwards linear  ",
          slideUp: "slideUp 0.3s forwards linear  ",
          slideIn: "slideIn 0.3s forwards linear  ",
          slideOut: "slideOut 0.3s forwards linear  ",
          slideInOut: "slideInOut 4s forwards linear  ",
          scaleIn: 'scaleIn 200ms ease',
          scaleOut: 'scaleOut 200ms ease',
          fadeIn: 'fadeIn 200ms ease',
          fadeOut: 'fadeOut 200ms ease',
          enterFromLeft: 'enterFromLeft 250ms ease',
          enterFromRight: 'enterFromRight 250ms ease',
          exitToLeft: 'exitToLeft 250ms ease',
          exitToRight: 'exitToRight 250ms ease',
          slideUpAndFade: 'slideUpAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          slideRightAndFade: 'slideRightAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          slideDownAndFade: 'slideDownAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          slideLeftAndFade: 'slideLeftAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        },
        keyframes: {
          reset: {
            "50%": {
              transform:
                "translate(0,0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);",
            },
            "0%,100%": {
              transform:
                "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
            },
          },
          fadein: {
            to: {
              opacity: "var(--fadein-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          fadeout: {
            from: {
              opacity: "var(--fadeout-opacity,1)",
              transform:
                "translate(var(--fade-translate-x,0) , var(--fade-translate-y,0)) rotate(var(--fade-rotate)) skewX(var(--fade-skew-x,0)) skewY(var(--fade-skew-y,0)) scaleX(var(--fade-scale-x,1)) scaleY(var(--fade-scale-y,1));",
            },
          },
          buzz: {
            "0%,20%,40%,60%,80%,100%": {
              transform:
                "rotate(0deg) ",
            },
            "10%,50%": {
              transform:
                "rotate(-12.5deg) ",
            },
            "30%,70%": {
              transform:
                "rotate(12.5deg)",
            },
          },
          shake: {
            "0%,100%": {
              transform:
                "rotate(-12.5deg) ",
            },
            "50%": {
              transform:
                "rotate(12.5deg) ",
            },
          },
          slideInOut: {
            "0%,100%": {
              transform:
                "translate(-16px,0px) ",
            },
            "50%": {
              transform:
                "translate(16px,0px) ",
            },
          },
          slideDown: {
            from: {
              height: "0"
            },
            to: {
              height: "var(--radix-collapsible-content-height)"
            }
          }
          , slideUp: {
            from: {
              height: "var(--radix-collapsible-content-height)"
            },
            to: {
              height: "0"
            }
          },
          slideOut: {
            to: {
              transform: "translate(100% , 0px);"
            },
            from: {
              transform: "translate(0px , 0px);",
            }
          },
          slideIn: {
            from: {
              transform: "translate(100% , 0px);"
            },
            to: {
              transform: "translate(0px , 0px);",
            }
          },
          enterFromRight: {
            from: { opacity: '0', transform: 'translateX(200px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
          enterFromLeft: {
            from: { opacity: '0', transform: 'translateX(-200px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
          exitToRight: {
            from: { opacity: '1', transform: 'translateX(0)' },
            to: { opacity: '0', transform: 'translateX(200px)' },
          },
          exitToLeft: {
            from: { opacity: '1', transform: 'translateX(0)' },
            to: { opacity: '0', transform: 'translateX(-200px)' },
          },
          scaleIn: {
            from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
            to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          },
          scaleOut: {
            from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
            to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
          },
          fadeIn: {
            from: { opacity: '0' },
            to: { opacity: '1' },
          },
          fadeOut: {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          slideUpAndFade: {
            from: { opacity: '0', transform: 'translateY(20px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
          slideRightAndFade: {
            from: { opacity: '0', transform: 'translateX(-20px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
          slideDownAndFade: {
            from: { opacity: '0', transform: 'translateY(-20px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
          slideLeftAndFade: {
            from: { opacity: '0', transform: 'translateX(20px)' },
            to: { opacity: '1', transform: 'translateX(0)' },
          },
        },
      },
    },

  });
export default MyPlugin;
