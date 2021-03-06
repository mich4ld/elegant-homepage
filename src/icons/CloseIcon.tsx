import { FunctionalComponent, h } from 'preact';

interface IProps {
    size: string;
}

const CloseIcon: FunctionalComponent<IProps> = ({ size }) => {
    return <svg width={size} height={size} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M563.8 512L826.3 199.1C830.7 193.9 827 186 820.2 186H740.4C735.7 186 731.2 188.1 728.1 191.7L511.6 449.8L295.1 191.7C292.1 188.1 287.6 186 282.8 186H203C196.2 186 192.5 193.9 196.9 199.1L459.4 512L196.9 824.9C195.914 826.059 195.282 827.477 195.078 828.984C194.874 830.492 195.107 832.027 195.749 833.406C196.392 834.785 197.416 835.951 198.701 836.766C199.987 837.58 201.479 838.008 203 838H282.8C287.5 838 292 835.9 295.1 832.3L511.6 574.2L728.1 832.3C731.1 835.9 735.6 838 740.4 838H820.2C827 838 830.7 830.1 826.3 824.9L563.8 512Z" fill="black"/>
    </svg>
    
}

export default CloseIcon;