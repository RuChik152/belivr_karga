import React from 'react';

interface SearchBtnProps {
    styleBtn: string,
    styleSvg: string,
    action: any
}

const SearchBtn = (props: SearchBtnProps) : JSX.Element => {
    return (
        <button onClick={props.action} className={props.styleBtn}>
            <svg className={props.styleSvg}  viewBox="0 0 1010 1010" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.5801 1010C66.3892 1010 43.6494 1000.6 26.541 983.495C9.4155 966.352 0 943.612 0 919.402C0 895.228 9.4155 872.454 26.541 855.345L209.674 672.213C226.782 655.104 249.522 645.672 273.713 645.672C297.905 645.672 320.662 655.105 337.788 672.177C373.099 707.541 373.08 765.034 337.788 800.326L154.655 983.495C137.529 1000.6 114.773 1010 90.5801 1010ZM273.713 682.398C259.331 682.398 245.809 687.994 235.641 698.18L52.5088 881.312C42.3223 891.499 36.7275 905.02 36.7275 919.402C36.7275 933.785 42.3223 947.343 52.5088 957.527C72.8452 977.864 108.316 977.864 128.689 957.493L311.821 774.359C332.803 753.378 332.803 719.197 311.803 698.18C301.635 687.994 288.114 682.398 273.713 682.398Z"/>
                <path d="M343.239 736.197C341.644 736.197 340.03 735.982 338.434 735.553C332.085 733.83 327.136 728.846 325.468 722.497C322.976 712.922 318.366 704.743 311.803 698.144C305.275 691.652 297.08 687.062 287.468 684.515C281.12 682.829 276.152 677.879 274.431 671.53C272.727 665.183 274.538 658.404 279.183 653.778L337.932 595.028C341.59 591.334 346.629 589.361 351.83 589.649C357.013 589.935 361.854 592.375 365.136 596.392C379.608 614.073 395.91 630.393 413.609 644.847C417.626 648.146 420.065 652.988 420.334 658.153C420.585 663.353 418.648 668.375 414.972 672.069L356.223 730.818C352.744 734.297 348.046 736.197 343.239 736.197ZM323.908 660.986C328.929 664.251 333.574 667.981 337.77 672.177C341.984 676.409 345.75 681.071 349.014 686.058L375.035 660.055C366.284 652.092 357.909 643.699 349.929 634.948L323.908 660.986Z"/>
                <path d="M630.491 759.009C421.231 759.009 250.992 588.752 250.992 379.5C250.992 170.239 421.231 0 630.491 0C839.752 0 1009.99 170.239 1009.99 379.5C1009.99 588.752 839.752 759.009 630.491 759.009ZM630.491 36.7271C441.496 36.7271 287.719 190.503 287.719 379.5C287.719 568.487 441.496 722.281 630.491 722.281C819.488 722.281 973.266 568.487 973.266 379.5C973.266 190.503 819.488 36.7271 630.491 36.7271Z"/>
                <path d="M431.865 379.823C421.715 379.823 413.501 371.609 413.501 361.459C413.501 231.839 518.931 126.393 648.532 126.393C658.682 126.393 666.896 134.605 666.896 144.756C666.896 154.906 658.682 163.12 648.532 163.12C539.194 163.12 450.228 252.086 450.228 361.459C450.228 371.609 442.015 379.823 431.865 379.823Z"/>
            </svg>
        </button>
    );
};

export default SearchBtn;