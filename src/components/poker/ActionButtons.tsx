import Button from '../common/Button';

interface ActionButtonsProps {
  onFold: () => void;
  onCheck: () => void;
  onCall: () => void;
  onRaise: () => void;
  callAmount?: number;
  canCheck?: boolean;
  disabled?: boolean;
}

export default function ActionButtons({
  onFold,
  onCheck,
  onCall,
  onRaise,
  callAmount = 0,
  canCheck = false,
  disabled = false
}: ActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <Button
        variant="danger"
        size="lg"
        onClick={onFold}
        disabled={disabled}
        className="min-w-[120px]"
      >
        Fold
      </Button>

      {canCheck ? (
        <Button
          variant="success"
          size="lg"
          onClick={onCheck}
          disabled={disabled}
          className="min-w-[120px]"
        >
          Check
        </Button>
      ) : (
        <Button
          variant="success"
          size="lg"
          onClick={onCall}
          disabled={disabled}
          className="min-w-[120px]"
        >
          Call ${callAmount}
        </Button>
      )}

      <Button
        variant="primary"
        size="lg"
        onClick={onRaise}
        disabled={disabled}
        className="min-w-[120px]"
      >
        Raise
      </Button>
    </div>
  );
}
