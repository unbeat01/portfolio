
import './App.scss';
import React from 'react';
import Data from './components/data/data';
import About from './components/about/about'
import CustomButton from './components/custom-button/custom-button.components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    }
  }
  changePage = () => {
    this.setState({ display: true })
  }
  render() {
    return (
      <div className="App">
        {  !this.state.display ? (<div className='intro-div'>
          <div className='myself-img-div'>
            <svg width="983" height="764" viewBox="0 0 983 764" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_Location_search_re_ttoj 1" clip-path="url(#clip0)">
                <g id="remain">
                  <path id="Vector"
                    d="M960.773 446.206C1067.75 564.514 757.635 735.014 507.053 735.014C256.471 735.014 83.107 602.907 53.3336 446.206C-18.8565 66.2588 668.411 -175.233 507.053 157.398C271.855 642.246 876.524 353.035 960.773 446.206Z"
                    fill="#E6E6E6" />
                  <path id="Vector_2"
                    d="M912.773 474.206C1019.75 592.514 709.635 763.014 459.053 763.014C208.471 763.014 35.107 630.907 5.33368 474.206C-66.8565 94.2588 620.411 -147.233 459.053 185.398C223.855 670.246 828.523 381.035 912.773 474.206Z"
                    fill="#3F3D56" />
                  <path id="Vector_3"
                    d="M912.773 474.206C1019.75 592.514 709.635 763.014 459.053 763.014C208.471 763.014 35.107 630.907 5.33368 474.206C-66.8565 94.2588 620.411 -147.233 459.053 185.398C223.855 670.246 828.523 381.035 912.773 474.206Z"
                    fill="#3F3D56" />
                  <path id="Vector_4"
                    d="M348.905 152.898C354.427 152.898 358.905 148.421 358.905 142.898C358.905 137.375 354.427 132.898 348.905 132.898C343.382 132.898 338.905 137.375 338.905 142.898C338.905 148.421 343.382 152.898 348.905 152.898Z"
                    fill="#6C63FF" />
                  <path id="Vector_5"
                    d="M122.905 458.898C126.219 458.898 128.905 456.212 128.905 452.898C128.905 449.584 126.219 446.898 122.905 446.898C119.591 446.898 116.905 449.584 116.905 452.898C116.905 456.212 119.591 458.898 122.905 458.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_6"
                    d="M542.905 664.898C546.219 664.898 548.905 662.212 548.905 658.898C548.905 655.584 546.219 652.898 542.905 652.898C539.591 652.898 536.905 655.584 536.905 658.898C536.905 662.212 539.591 664.898 542.905 664.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_7"
                    d="M151.905 342.898C153.562 342.898 154.905 341.555 154.905 339.898C154.905 338.241 153.562 336.898 151.905 336.898C150.248 336.898 148.905 338.241 148.905 339.898C148.905 341.555 150.248 342.898 151.905 342.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_8"
                    d="M399.905 566.898C401.562 566.898 402.905 565.555 402.905 563.898C402.905 562.241 401.562 560.898 399.905 560.898C398.248 560.898 396.905 562.241 396.905 563.898C396.905 565.555 398.248 566.898 399.905 566.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_9"
                    d="M709.905 626.898C711.562 626.898 712.905 625.555 712.905 623.898C712.905 622.241 711.562 620.898 709.905 620.898C708.248 620.898 706.905 622.241 706.905 623.898C706.905 625.555 708.248 626.898 709.905 626.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_10"
                    d="M562.905 518.898C564.562 518.898 565.905 517.555 565.905 515.898C565.905 514.241 564.562 512.898 562.905 512.898C561.248 512.898 559.905 514.241 559.905 515.898C559.905 517.555 561.248 518.898 562.905 518.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_11"
                    d="M372.905 222.898C374.562 222.898 375.905 221.555 375.905 219.898C375.905 218.241 374.562 216.898 372.905 216.898C371.248 216.898 369.905 218.241 369.905 219.898C369.905 221.555 371.248 222.898 372.905 222.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_12"
                    d="M396.905 74.8982C398.562 74.8982 399.905 73.555 399.905 71.8981C399.905 70.2412 398.562 68.8981 396.905 68.8981C395.248 68.8981 393.905 70.2412 393.905 71.8981C393.905 73.555 395.248 74.8982 396.905 74.8982Z"
                    fill="#E6E6E6" />
                  <path id="Vector_13"
                    d="M382.905 697.898C384.562 697.898 385.905 696.555 385.905 694.898C385.905 693.241 384.562 691.898 382.905 691.898C381.248 691.898 379.905 693.241 379.905 694.898C379.905 696.555 381.248 697.898 382.905 697.898Z"
                    fill="#E6E6E6" />
                  <path id="Vector_14"
                    d="M473.04 443.887C478.703 440.257 471.816 419.41 457.658 397.325C443.5 375.24 427.433 360.279 421.77 363.91C416.107 367.54 422.993 388.386 437.151 410.471C451.309 432.556 467.377 447.517 473.04 443.887Z"
                    fill="#3F3D56" />
                </g>
                <g id="girl">
                  <g id="Frame 1">
                    <path id="Vector_15"
                      d="M850.905 537.898C852.562 537.898 853.905 536.555 853.905 534.898C853.905 533.241 852.562 531.898 850.905 531.898C849.248 531.898 847.905 533.241 847.905 534.898C847.905 536.555 849.248 537.898 850.905 537.898Z"
                      fill="#E6E6E6" />
                    <path id="Vector_16"
                      d="M703.905 526.898C705.562 526.898 706.905 525.555 706.905 523.898C706.905 522.241 705.562 520.898 703.905 520.898C702.248 520.898 700.905 522.241 700.905 523.898C700.905 525.555 702.248 526.898 703.905 526.898Z"
                      fill="#E6E6E6" />
                    <path id="Vector_17"
                      d="M816.853 317.92C816.6 318.411 816.385 318.922 816.212 319.448L768.429 332.725L759.818 324.298L745.403 335.631L759.197 352.03C760.311 353.355 761.825 354.283 763.512 354.674C765.198 355.065 766.966 354.899 768.549 354.199L820.166 331.415C821.917 332.63 823.997 333.284 826.128 333.288C828.26 333.293 830.343 332.649 832.099 331.441C833.855 330.233 835.203 328.519 835.961 326.527C836.72 324.535 836.854 322.359 836.346 320.289C835.838 318.219 834.711 316.352 833.116 314.938C831.522 313.523 829.534 312.628 827.418 312.371C825.302 312.114 823.158 312.507 821.27 313.498C819.383 314.489 817.843 316.031 816.853 317.92H816.853Z"
                      fill="#FFB8B8" />
                    <path id="Vector_18"
                      d="M766.746 333.503L748.81 347.463C748.3 347.86 747.71 348.142 747.081 348.291C746.451 348.44 745.797 348.451 745.163 348.324C744.529 348.197 743.93 347.935 743.406 347.556C742.883 347.176 742.447 346.688 742.129 346.125L730.982 326.398C728.964 323.776 728.069 320.46 728.492 317.178C728.915 313.897 730.622 310.917 733.239 308.892C735.856 306.867 739.17 305.963 742.453 306.378C745.735 306.792 748.72 308.492 750.751 311.104L767.089 326.698C767.557 327.144 767.923 327.686 768.162 328.287C768.402 328.888 768.508 329.533 768.476 330.179C768.443 330.825 768.272 331.456 767.973 332.03C767.675 332.603 767.256 333.106 766.746 333.503V333.503Z"
                      fill="#6C63FF" />
                    <path id="Vector_19"
                      d="M773.577 540.443L785.837 540.442L791.67 493.154L773.575 493.155L773.577 540.443Z"
                      fill="#FFB8B8" />
                    <path id="Vector_20"
                      d="M770.45 536.44L794.594 536.439H794.595C796.616 536.439 798.616 536.837 800.483 537.61C802.35 538.384 804.046 539.517 805.475 540.946C806.904 542.374 808.037 544.071 808.81 545.937C809.584 547.804 809.982 549.805 809.982 551.826V552.326L770.451 552.327L770.45 536.44Z"
                      fill="#2F2E41" />
                    <path id="Vector_21"
                      d="M805.577 537.443L817.837 537.442L823.67 490.154L805.575 490.155L805.577 537.443Z"
                      fill="#FFB8B8" />
                    <path id="Vector_22"
                      d="M802.45 533.44L826.594 533.439H826.595C828.616 533.439 830.616 533.837 832.483 534.61C834.35 535.384 836.046 536.517 837.475 537.946C838.904 539.374 840.037 541.071 840.81 542.937C841.584 544.804 841.982 546.805 841.982 548.826V549.326L802.451 549.327L802.45 533.44Z"
                      fill="#2F2E41" />
                    <path id="Vector_23"
                      d="M718.585 429.478C721.197 437.221 726.152 443.96 732.762 448.764C739.373 453.567 747.314 456.196 755.485 456.288L756.105 456.298C762.435 456.478 769.865 454.438 777.155 451.508C791.555 445.718 805.385 436.448 809.055 433.898L802.835 493.688L800.315 517.928C800.251 518.555 800.32 519.189 800.516 519.788C800.712 520.387 801.031 520.938 801.453 521.406C801.875 521.875 802.391 522.249 802.966 522.506C803.542 522.763 804.165 522.897 804.795 522.898H820.325C821.321 522.899 822.289 522.569 823.078 521.961C823.866 521.354 824.432 520.501 824.685 519.538L850.325 421.888C851.094 418.965 851.156 415.901 850.505 412.95C849.855 409.998 848.511 407.244 846.585 404.915C844.659 402.587 842.205 400.75 839.428 399.557C836.651 398.365 833.63 397.851 830.615 398.058L777.355 401.708L781.075 386.828L733.535 383.668L733.395 383.768C732.255 384.598 731.145 385.468 730.085 386.378C727.435 388.62 725.085 391.194 723.095 394.038C719.534 399.141 717.264 405.031 716.479 411.203C715.693 417.376 716.416 423.646 718.585 429.478Z"
                      fill="#2F2E41" />
                    <path id="Vector_24"
                      d="M718.585 429.478C721.197 437.221 726.152 443.96 732.762 448.764C739.373 453.567 747.314 456.196 755.485 456.288C763.299 452.334 770.839 447.86 778.055 442.898L777.155 451.508L769.315 526.928C769.251 527.555 769.32 528.189 769.516 528.788C769.712 529.387 770.031 529.938 770.453 530.406C770.875 530.875 771.391 531.249 771.966 531.506C772.542 531.763 773.165 531.897 773.795 531.898H789.325C790.321 531.899 791.289 531.569 792.078 530.961C792.866 530.354 793.432 529.501 793.685 528.538L802.835 493.688L819.325 430.888C820.094 427.965 820.156 424.901 819.505 421.95C818.855 418.998 817.511 416.244 815.585 413.915C813.659 411.587 811.205 409.75 808.428 408.557C805.651 407.365 802.63 406.851 799.615 407.058L746.355 410.708L750.075 395.828L723.095 394.038C719.534 399.141 717.264 405.031 716.479 411.203C715.693 417.376 716.416 423.646 718.585 429.478Z"
                      fill="#2F2E41" />
                    <path id="Vector_25"
                      d="M730.017 389.828L729.659 389.785L721.364 349C721.293 348.646 714.512 313.467 735.301 295.075L735.663 292.558C735.756 291.914 735.987 291.298 736.341 290.752C736.695 290.206 737.163 289.743 737.713 289.395C738.263 289.047 738.882 288.823 739.527 288.738C740.172 288.652 740.828 288.708 741.45 288.901L761.035 294.975C762.143 295.317 763.077 296.074 763.64 297.089C764.202 298.103 764.351 299.296 764.054 300.417L762.15 307.659C764.79 310.759 795.864 348.171 785.04 376.994L780.192 395.946L730.017 389.828Z"
                      fill="#6C63FF" />
                    <path id="Vector_26"
                      d="M811.338 357.997C810.869 358.292 810.425 358.623 810.008 358.987L762.111 346.129L758.98 334.495L740.804 336.926L744.346 358.061C744.632 359.768 745.465 361.336 746.718 362.531C747.972 363.725 749.578 364.48 751.298 364.683L807.33 371.302C808.22 373.239 809.678 374.859 811.512 375.947C813.345 377.034 815.466 377.538 817.593 377.391C819.719 377.244 821.751 376.453 823.417 375.123C825.082 373.793 826.304 371.988 826.919 369.947C827.534 367.906 827.513 365.726 826.858 363.697C826.204 361.668 824.948 359.887 823.256 358.59C821.565 357.292 819.518 356.541 817.389 356.435C815.26 356.329 813.149 356.874 811.338 357.997H811.338Z"
                      fill="#FFB8B8" />
                    <path id="Vector_27"
                      d="M760.266 345.944L737.724 348.847C737.083 348.93 736.431 348.873 735.814 348.681C735.196 348.489 734.627 348.166 734.146 347.735C733.664 347.303 733.281 346.773 733.023 346.18C732.765 345.587 732.638 344.945 732.65 344.299L733.08 321.644C732.676 318.36 733.59 315.05 735.623 312.44C737.656 309.829 740.641 308.131 743.924 307.718C747.207 307.305 750.519 308.21 753.135 310.236C755.751 312.262 757.457 315.242 757.879 318.524L764.021 340.258C764.197 340.88 764.237 341.533 764.137 342.172C764.038 342.811 763.802 343.421 763.445 343.961C763.089 344.5 762.621 344.957 762.072 345.299C761.523 345.641 760.907 345.861 760.266 345.944Z"
                      fill="#6C63FF" />
                    <path id="Vector_28"
                      d="M753.921 283.365C767.485 283.365 778.482 272.368 778.482 258.804C778.482 245.239 767.485 234.243 753.921 234.243C740.356 234.243 729.36 245.239 729.36 258.804C729.36 272.368 740.356 283.365 753.921 283.365Z"
                      fill="#FFB8B8" />
                    <path id="Vector_29"
                      d="M752.628 260.855L749.553 255.255C743.729 278.987 754.017 298.628 754.017 298.628L714.085 280.027L714.465 273.428L710.514 277.912L704.836 274.783L704.086 270.502L699.801 271.564L715.444 243.176C730.627 216.163 752.699 226.477 752.699 226.477C787.815 224.807 783.526 259.452 783.526 259.452L752.628 260.855Z"
                      fill="#2F2E41" />
                  </g>
                </g>
                <g id="mobile">
                  <path id="Vector_30"
                    d="M824.53 316.277L842.718 324.46C843.479 324.803 844.074 325.434 844.37 326.215C844.666 326.996 844.64 327.862 844.297 328.624L842.144 333.41C842.397 333.525 842.595 333.736 842.694 333.996C842.792 334.256 842.784 334.544 842.671 334.798L841.809 336.713C841.694 336.966 841.484 337.164 841.224 337.262C840.964 337.361 840.675 337.353 840.421 337.239L839.56 339.154C839.813 339.269 840.011 339.479 840.109 339.739C840.208 339.999 840.2 340.288 840.087 340.542L839.225 342.456C839.11 342.71 838.9 342.907 838.64 343.006C838.38 343.105 838.091 343.096 837.837 342.983L826.209 368.829C825.866 369.591 825.235 370.185 824.454 370.481C823.673 370.778 822.807 370.752 822.045 370.409L803.857 362.226C803.095 361.883 802.501 361.252 802.205 360.471C801.909 359.69 801.935 358.824 802.277 358.062L820.366 317.857C820.708 317.095 821.34 316.501 822.121 316.205C822.901 315.909 823.768 315.935 824.53 316.277Z"
                    fill="#3F3D56" />
                  <path id="Vector_31"
                    d="M806.776 357.51L821.366 364.082C822.097 364.408 822.928 364.433 823.677 364.15C824.427 363.867 825.033 363.299 825.366 362.57L832.105 347.58L834.445 342.384L840.544 328.822C840.87 328.093 840.894 327.264 840.611 326.516C840.327 325.769 839.76 325.164 839.033 324.834L834.445 322.766L824.431 318.263C823.7 317.936 822.87 317.913 822.122 318.199C821.374 318.484 820.77 319.054 820.443 319.785L814.543 332.895L807.825 347.822L805.264 353.522C804.937 354.251 804.913 355.081 805.196 355.828C805.479 356.576 806.047 357.181 806.776 357.51Z"
                    fill="#F2F2F2" />
                </g>
                <g id="base-location">
                  <path id="Vector_32"
                    d="M294.405 502.898C312.906 502.898 327.905 499.988 327.905 496.398C327.905 492.808 312.906 489.898 294.405 489.898C275.903 489.898 260.905 492.808 260.905 496.398C260.905 499.988 275.903 502.898 294.405 502.898Z"
                    fill="white" />
                </g>
                <g id="location">
                  <path id="Vector_33"
                    d="M351.905 362.898C351.905 389.779 310.345 452.414 298.2 470.145C297.834 470.681 297.342 471.119 296.768 471.422C296.194 471.725 295.554 471.884 294.905 471.884C294.256 471.884 293.616 471.725 293.042 471.422C292.468 471.119 291.976 470.681 291.61 470.145C279.464 452.414 237.905 389.779 237.905 362.898C237.905 355.413 239.379 348.001 242.244 341.085C245.108 334.17 249.307 327.886 254.6 322.593C259.893 317.3 266.176 313.102 273.092 310.237C280.007 307.373 287.42 305.898 294.905 305.898C302.39 305.898 309.802 307.373 316.718 310.237C323.633 313.102 329.917 317.3 335.21 322.593C340.503 327.886 344.701 334.17 347.566 341.085C350.431 348.001 351.905 355.413 351.905 362.898Z"
                    fill="white" />
                  <path id="Vector_34"
                    d="M294.905 387.898C310.921 387.898 323.905 374.914 323.905 358.898C323.905 342.882 310.921 329.898 294.905 329.898C278.889 329.898 265.905 342.882 265.905 358.898C265.905 374.914 278.889 387.898 294.905 387.898Z"
                    fill="#6C63FF" />
                </g>
                <g id="search">
                  <path id="Vector_35"
                    d="M657.539 384.502L615.707 342.67C618.913 337.682 621.086 332.102 622.097 326.259C623.107 320.417 622.934 314.431 621.589 308.656C620.244 302.881 617.753 297.435 614.265 292.641C610.776 287.846 606.361 283.801 601.28 280.744C591.714 275.029 580.349 273.115 569.439 275.382C558.528 277.648 548.866 283.929 542.367 292.982C536.386 301.367 533.514 311.574 534.244 321.847C534.973 332.12 539.259 341.819 546.365 349.275C553.47 356.731 562.951 361.478 573.177 362.701C583.404 363.924 593.737 361.547 602.4 355.977L644.232 397.809C645.997 399.572 648.39 400.562 650.884 400.561C653.379 400.56 655.771 399.569 657.535 397.805C659.299 396.041 660.29 393.649 660.291 391.154C660.292 388.659 659.302 386.267 657.539 384.502ZM600.838 341.108C595.655 346.292 588.834 349.517 581.539 350.236C574.244 350.955 566.926 349.121 560.831 345.049C554.736 340.977 550.242 334.917 548.114 327.902C545.986 320.887 546.356 313.352 549.161 306.58C551.966 299.807 557.033 294.217 563.498 290.761C569.962 287.306 577.425 286.199 584.615 287.629C591.804 289.059 598.275 292.938 602.926 298.604C607.576 304.27 610.118 311.374 610.118 318.704C610.123 322.866 609.306 326.988 607.714 330.832C606.121 334.677 603.784 338.169 600.838 341.108Z"
                    fill="#3F3D56" />
                </g>
                <g id="ring">
                  <path id="Vector_36"
                    d="M149.594 196.825C74.5265 193.52 16.3226 177.327 17.0873 159.961C17.5457 149.549 38.7905 141.177 75.374 136.991C75.505 136.976 75.6377 136.986 75.7647 137.021C75.8917 137.057 76.0103 137.117 76.1138 137.199C76.2174 137.281 76.3037 137.382 76.3679 137.497C76.4321 137.613 76.4728 137.739 76.4878 137.87C76.5028 138.002 76.4917 138.134 76.4552 138.261C76.4187 138.388 76.3575 138.506 76.2751 138.609C76.1927 138.712 76.0907 138.798 75.9751 138.861C75.8595 138.924 75.7324 138.964 75.6013 138.978C41.1396 142.921 19.484 150.995 19.0853 160.049C18.3938 175.753 78.1996 191.68 149.682 194.827C221.164 197.975 282.138 187.366 282.83 171.662C283.23 162.57 262.233 152.596 228.032 145.633C227.903 145.607 227.78 145.556 227.671 145.483C227.562 145.41 227.468 145.315 227.395 145.206C227.323 145.096 227.272 144.973 227.247 144.844C227.222 144.715 227.222 144.582 227.249 144.453C227.275 144.324 227.326 144.202 227.4 144.093C227.474 143.984 227.568 143.89 227.678 143.818C227.788 143.745 227.911 143.695 228.04 143.671C228.169 143.646 228.302 143.647 228.431 143.673C264.732 151.064 285.288 161.297 284.828 171.75C284.063 189.116 224.661 200.131 149.594 196.825Z"
                    fill="#6C63FF" />
                </g>
                <g id="planet">
                  <path id="Vector_37"
                    d="M82.9229 199.734C89.2028 211.663 98.5053 221.735 109.9 228.94C121.294 236.145 134.381 240.232 147.851 240.791C161.321 241.35 174.702 238.362 186.654 232.126C198.607 225.889 208.712 216.624 215.959 205.256C171.546 205.854 127.134 204.011 82.9229 199.734Z"
                    fill="#6C63FF" />
                  <path id="Vector_38"
                    d="M224.263 184.221C228.042 172.884 229.131 160.824 227.443 148.994C225.756 137.164 221.338 125.89 214.54 116.063C207.741 106.235 198.749 98.1254 188.274 92.3744C177.8 86.6235 166.13 83.3895 154.189 82.9284C142.249 82.4673 130.365 84.7917 119.478 89.7177C108.591 94.6437 98.9995 102.036 91.4635 111.31C83.9274 120.583 78.6533 131.484 76.0585 143.148C73.4636 154.813 73.6193 166.921 76.5132 178.515C125.309 186.798 174.973 188.716 224.263 184.221Z"
                    fill="#6C63FF" />
                  <path id="Vector_39"
                    d="M168.834 132.601C173.804 132.601 177.834 128.571 177.834 123.601C177.834 118.63 173.804 114.601 168.834 114.601C163.863 114.601 159.834 118.63 159.834 123.601C159.834 128.571 163.863 132.601 168.834 132.601Z"
                    fill="white" />
                  <path id="Vector_40"
                    d="M122.513 167.591C130.798 167.591 137.513 160.876 137.513 152.591C137.513 144.307 130.798 137.591 122.513 137.591C114.229 137.591 107.513 144.307 107.513 152.591C107.513 160.876 114.229 167.591 122.513 167.591Z"
                    fill="white" />
                  <path id="Vector_41"
                    d="M148.374 233.799C153.344 233.799 157.374 229.769 157.374 224.799C157.374 219.828 153.344 215.799 148.374 215.799C143.403 215.799 139.374 219.828 139.374 224.799C139.374 229.769 143.403 233.799 148.374 233.799Z"
                    fill="white" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="982.487" height="763.014" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <div className='into-name'>
            <svg className='intro' width="860" height="292" viewBox="0 0 860 292" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M148.345 7.088V74H139.609V43.664H105.529V74H96.7926V7.088H105.529V36.464H139.609V7.088H148.345Z" stroke="skyblue" stroke-width="2" />
              <path d="M168.733 12.848C167.069 12.848 165.661 12.272 164.509 11.12C163.357 9.968 162.781 8.56 162.781 6.896C162.781 5.232 163.357 3.824 164.509 2.672C165.661 1.52 167.069 0.944 168.733 0.944C170.333 0.944 171.677 1.52 172.765 2.672C173.917 3.824 174.493 5.232 174.493 6.896C174.493 8.56 173.917 9.968 172.765 11.12C171.677 12.272 170.333 12.848 168.733 12.848ZM172.957 21.392V74H164.221V21.392H172.957Z" stroke="skyblue" stroke-width="2" />
              <path d="M197.83 61.904L187.078 87.728H181.222L188.23 61.904H197.83Z" stroke="skyblue" stroke-width="2" />
              <path d="M276.67 7.568V74H267.934V24.464L245.854 74H239.71L217.534 24.368V74H208.798V7.568H218.206L242.782 62.48L267.358 7.568H276.67Z" stroke="skyblue" stroke-width="2" />
              <path d="M339.293 7.088L317.501 48.752V74H308.765V48.752L286.877 7.088H296.573L313.085 40.976L329.597 7.088H339.293Z" stroke="skyblue" stroke-width="2" />
              <path d="M428.629 74H419.893L384.757 20.72V74H376.021V6.992H384.757L419.893 60.176V6.992H428.629V74Z" stroke="skyblue" stroke-width="2" />
              <path d="M484.033 59.12H454.849L449.473 74H440.257L464.449 7.472H474.529L498.625 74H489.409L484.033 59.12ZM481.537 52.016L469.441 18.224L457.345 52.016H481.537Z" stroke="skyblue" stroke-width="2" />
              <path d="M578.001 7.568V74H569.265V24.464L547.185 74H541.041L518.865 24.368V74H510.129V7.568H519.537L544.113 62.48L568.689 7.568H578.001Z" stroke="skyblue" stroke-width="2" />
              <path d="M602.512 14.192V36.56H626.896V43.76H602.512V66.8H629.776V74H593.776V6.992H629.776V14.192H602.512Z" stroke="skyblue" stroke-width="2" />
              <path d="M679.245 7.088V74H670.509V7.088H679.245Z" stroke="skyblue" stroke-width="2" />
              <path d="M716.31 74.672C711.894 74.672 707.926 73.904 704.406 72.368C700.95 70.768 698.23 68.592 696.246 65.84C694.262 63.024 693.238 59.792 693.174 56.144H702.486C702.806 59.28 704.086 61.936 706.326 64.112C708.63 66.224 711.958 67.28 716.31 67.28C720.47 67.28 723.734 66.256 726.102 64.208C728.534 62.096 729.75 59.408 729.75 56.144C729.75 53.584 729.046 51.504 727.638 49.904C726.23 48.304 724.47 47.088 722.358 46.256C720.246 45.424 717.398 44.528 713.814 43.568C709.398 42.416 705.846 41.264 703.158 40.112C700.534 38.96 698.262 37.168 696.342 34.736C694.486 32.24 693.558 28.912 693.558 24.752C693.558 21.104 694.486 17.872 696.342 15.056C698.198 12.24 700.79 10.064 704.118 8.528C707.51 6.992 711.382 6.224 715.734 6.224C722.006 6.224 727.126 7.792 731.094 10.928C735.126 14.064 737.398 18.224 737.91 23.408H728.31C727.99 20.848 726.646 18.608 724.278 16.688C721.91 14.704 718.774 13.712 714.87 13.712C711.222 13.712 708.246 14.672 705.942 16.592C703.638 18.448 702.486 21.072 702.486 24.464C702.486 26.896 703.158 28.88 704.502 30.416C705.91 31.952 707.606 33.136 709.59 33.968C711.638 34.736 714.486 35.632 718.134 36.656C722.55 37.872 726.102 39.088 728.79 40.304C731.478 41.456 733.782 43.28 735.702 45.776C737.622 48.208 738.582 51.536 738.582 55.76C738.582 59.024 737.718 62.096 735.99 64.976C734.262 67.856 731.702 70.192 728.31 71.984C724.918 73.776 720.918 74.672 716.31 74.672Z" stroke="skyblue" stroke-width="2" />
              <path d="M66.1379 267.68H22.3619L14.2979 290H0.473877L36.7619 190.208H51.8819L88.0259 290H74.2019L66.1379 267.68ZM62.3939 257.024L44.2499 206.336L26.1059 257.024H62.3939Z" stroke="skyblue" stroke-width="2" />
              <path d="M184.193 290H171.089L118.385 210.08V290H105.281V189.488H118.385L171.089 269.264V189.488H184.193V290Z" stroke="skyblue" stroke-width="2" />
              <path d="M262.403 290L221.075 244.208V290H207.971V189.632H221.075V236.144L262.547 189.632H279.107L233.603 239.888L279.539 290H262.403Z" stroke="skyblue" stroke-width="2" />
              <path d="M308.718 189.632V290H295.614V189.632H308.718Z" stroke="skyblue" stroke-width="2" />
              <path d="M394.268 189.632V200.288H366.908V290H353.804V200.288H326.3V189.632H394.268Z" stroke="skyblue" stroke-width="2" />
              <path d="M483.493 291.008C476.869 291.008 470.917 289.856 465.637 287.552C460.453 285.152 456.373 281.888 453.397 277.76C450.421 273.536 448.885 268.688 448.789 263.216H462.757C463.237 267.92 465.157 271.904 468.517 275.168C471.973 278.336 476.965 279.92 483.493 279.92C489.733 279.92 494.629 278.384 498.181 275.312C501.829 272.144 503.653 268.112 503.653 263.216C503.653 259.376 502.597 256.256 500.485 253.856C498.373 251.456 495.733 249.632 492.565 248.384C489.397 247.136 485.125 245.792 479.749 244.352C473.125 242.624 467.797 240.896 463.765 239.168C459.829 237.44 456.421 234.752 453.541 231.104C450.757 227.36 449.365 222.368 449.365 216.128C449.365 210.656 450.757 205.808 453.541 201.584C456.325 197.36 460.213 194.096 465.205 191.792C470.293 189.488 476.101 188.336 482.629 188.336C492.037 188.336 499.717 190.688 505.669 195.392C511.717 200.096 515.125 206.336 515.893 214.112H501.493C501.013 210.272 498.997 206.912 495.445 204.032C491.893 201.056 487.189 199.568 481.333 199.568C475.861 199.568 471.397 201.008 467.941 203.888C464.485 206.672 462.757 210.608 462.757 215.696C462.757 219.344 463.765 222.32 465.781 224.624C467.893 226.928 470.437 228.704 473.413 229.952C476.485 231.104 480.757 232.448 486.229 233.984C492.853 235.808 498.181 237.632 502.213 239.456C506.245 241.184 509.701 243.92 512.581 247.664C515.461 251.312 516.901 256.304 516.901 262.64C516.901 267.536 515.605 272.144 513.013 276.464C510.421 280.784 506.581 284.288 501.493 286.976C496.405 289.664 490.405 291.008 483.493 291.008Z" stroke="skyblue" stroke-width="2" />
              <path d="M550.728 189.632V290H537.624V189.632H550.728Z" stroke="skyblue" stroke-width="2" />
              <path d="M653.414 290H640.31L587.606 210.08V290H574.502V189.488H587.606L640.31 269.264V189.488H653.414V290Z" stroke="skyblue" stroke-width="2" />
              <path d="M754.52 189.632V290H741.416V244.496H690.296V290H677.192V189.632H690.296V233.696H741.416V189.632H754.52Z" stroke="skyblue" stroke-width="2" />
              <path d="M837.663 267.68H793.887L785.823 290H771.999L808.287 190.208H823.407L859.551 290H845.727L837.663 267.68ZM833.919 257.024L815.775 206.336L797.631 257.024H833.919Z" stroke="skyblue" stroke-width="2" />
            </svg>
          </div>

          <div className='enter-button'><CustomButton onClick={this.changePage} resume>Click TO Continue</CustomButton></div>
        </div>

        ) : (<div className='main'>
          <div className='side-bar'>
            <Data />
          </div>
          <div className='main-bar'>
            <About />
          </div>

        </div>
          )

        }
      </div>
    )
  }
}

export default App;
