import './WavyBackground.css';

const WavyBackground = () => {
  return (
    <div className="wavy-background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#050816" />
            <stop offset="100%" stopColor="#0a0d1a" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a4e" />
            <stop offset="50%" stopColor="#2d2d6e" />
            <stop offset="100%" stopColor="#3d3d8e" />
          </linearGradient>
        </defs>

        {/* Base background */}
        <rect width="100%" height="100%" fill="url(#baseGradient)" />

        {/* Top-center flowing lines - shifted right */}
        <path
          d="M 400 -50 Q 500 150, 600 400 Q 650 550, 580 750"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 380 -50 Q 480 170, 580 420 Q 630 570, 560 780"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.45"
          opacity="0.385"
        />
        <path
          d="M 360 -50 Q 460 190, 560 440 Q 610 590, 540 810"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.4"
          opacity="0.37"
        />
        <path
          d="M 340 -50 Q 440 210, 540 460 Q 590 610, 520 840"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.35"
          opacity="0.355"
        />
        <path
          d="M 320 -50 Q 420 230, 520 480 Q 570 630, 500 870"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.3"
          opacity="0.34"
        />
        <path
          d="M 300 -50 Q 400 250, 500 500 Q 550 650, 480 900"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.25"
          opacity="0.325"
        />
        <path
          d="M 280 -50 Q 380 270, 480 520 Q 530 670, 460 930"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.2"
          opacity="0.31"
        />
        <path
          d="M 260 -50 Q 360 290, 460 540 Q 510 690, 440 960"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.15"
          opacity="0.295"
        />
        <path
          d="M 240 -50 Q 340 310, 440 560 Q 490 710, 420 990"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.1"
          opacity="0.28"
        />
        <path
          d="M 220 -50 Q 320 330, 420 580 Q 470 730, 400 1020"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.05"
          opacity="0.265"
        />
        <path
          d="M 200 -50 Q 300 350, 400 600 Q 450 750, 380 1050"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.0"
          opacity="0.25"
        />
        <path
          d="M 180 -50 Q 280 370, 380 620 Q 430 770, 360 1080"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.95"
          opacity="0.235"
        />
        <path
          d="M 160 -50 Q 260 390, 360 640 Q 410 790, 340 1100"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.9"
          opacity="0.22"
        />
        <path
          d="M 140 -50 Q 240 410, 340 660 Q 390 810, 320 1120"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.85"
          opacity="0.205"
        />
        <path
          d="M 120 -50 Q 220 430, 320 680 Q 370 830, 300 1140"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.8"
          opacity="0.19"
        />

        {/* Bottom-center flowing lines - shifted left */}
        <path
          d="M 800 400 Q 1000 500, 1200 650 Q 1350 750, 1500 900"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M 820 420 Q 1020 515, 1220 660 Q 1370 755, 1520 895"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.45"
          opacity="0.385"
        />
        <path
          d="M 840 440 Q 1040 530, 1240 670 Q 1390 760, 1540 890"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.4"
          opacity="0.37"
        />
        <path
          d="M 860 460 Q 1060 545, 1260 680 Q 1410 765, 1560 885"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.35"
          opacity="0.355"
        />
        <path
          d="M 880 480 Q 1080 560, 1280 690 Q 1430 770, 1580 880"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.3"
          opacity="0.34"
        />
        <path
          d="M 900 500 Q 1100 575, 1300 700 Q 1450 775, 1600 875"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.25"
          opacity="0.325"
        />
        <path
          d="M 920 520 Q 1120 590, 1320 710 Q 1470 780, 1620 870"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.2"
          opacity="0.31"
        />
        <path
          d="M 940 540 Q 1140 605, 1340 720 Q 1490 785, 1640 865"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.15"
          opacity="0.295"
        />
        <path
          d="M 960 560 Q 1160 620, 1360 730 Q 1510 790, 1660 860"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.1"
          opacity="0.28"
        />
        <path
          d="M 980 580 Q 1180 635, 1380 740 Q 1530 795, 1680 855"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.05"
          opacity="0.265"
        />
        <path
          d="M 1000 600 Q 1200 650, 1400 750 Q 1550 800, 1700 850"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.0"
          opacity="0.25"
        />
        <path
          d="M 1020 620 Q 1220 665, 1420 760 Q 1570 805, 1720 845"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.95"
          opacity="0.235"
        />
        <path
          d="M 1040 640 Q 1240 680, 1440 770 Q 1590 810, 1740 840"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.9"
          opacity="0.22"
        />
        <path
          d="M 1060 660 Q 1260 695, 1460 780 Q 1610 815, 1760 835"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.85"
          opacity="0.205"
        />
        <path
          d="M 1080 680 Q 1280 710, 1480 790 Q 1630 820, 1780 830"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.8"
          opacity="0.19"
        />
      </svg>
    </div>
  );
};

export default WavyBackground;
