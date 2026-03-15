import Button from '../common/Button';

interface ActionButtonsProps {
  onFold: () => void;
  onCheck: () => void;
  onCall: () => void;
  onRaise: () => void;
  callAmount?: number;
  canCheck?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function ActionButtons({
  onFold,
  onCheck,
  onCall,
  onRaise,
  callAmount = 0,
  canCheck = false,
  disabled = false,
  className = ''
}: ActionButtonsProps) {
  return (
    <div className={`grid grid-cols-2 gap-3 md:grid-cols-4 ${className}`}>
      <Button
        variant="danger"
        size="lg"
        onClick={onFold}
        disabled={disabled}
        className="min-w-0 w-full rounded-[20px] py-4 text-base"
      >
        Fold
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={onCheck}
        disabled={disabled || !canCheck}
        className="min-w-0 w-full rounded-[20px] py-4 text-base"
      >
        Check
      </Button>

      <Button
        variant="primary"
        size="lg"
        onClick={onCall}
        disabled={disabled || canCheck}
        className="min-w-0 w-full rounded-[20px] py-4 text-base"
      >
        {callAmount > 0 ? `Call $${callAmount}` : 'Call'}
      </Button>

      <Button
        variant="secondary"
        size="lg"
        onClick={onRaise}
        disabled={disabled}
        className="min-w-0 w-full rounded-[20px] py-4 text-base"
      >
        Raise
      </Button>
    </div>
  );
}
