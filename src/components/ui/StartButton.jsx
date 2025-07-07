import Button from '@mui/material/Button';
import styles from '../../styles/sxStyles';

function StartButton({ onStart, buttonName }) {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={onStart}
      sx={styles.button}
    >
      {buttonName}
    </Button>
  );
}

export default StartButton;