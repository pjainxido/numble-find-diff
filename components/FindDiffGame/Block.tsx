interface BlockProps {
  side: number;
  color: string;
  id: number;
  onSelect: (index: number) => void;
}

const Block: React.FC<BlockProps> = ({ side, id, color, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(id)}
      style={{ width: side, height: side, backgroundColor: color, margin: 2 }}
    />
  );
};

export default Block;
