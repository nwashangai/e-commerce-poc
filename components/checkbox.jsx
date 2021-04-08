import Image from 'next/image';

const Check = ({ value, isActive, text, onClick = () => {} }) => (
  <div
    onClick={onClick}
    className="flex py-1"
  >
    
      <Image
        src={`/assets/${isActive ? 'check' : 'uncheck'}.svg`}
        alt="select"
        width={15}
        height={15}
        priority
      /><pre> <span className="font-archivo text-sm">{text}</span></pre>
  </div>
);

export default Check;
