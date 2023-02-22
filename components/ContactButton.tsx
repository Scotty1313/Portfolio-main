import { useState } from 'react';
import styles from '../styles/ContactButton.module.css';
import copy from 'copy-to-clipboard';

function ContactButton() {
  const [isShowingCopied, setIsShowingCopied] = useState<boolean>(false);

  const handleButtonClick = () => {
    copy('topd3vs@gmail.com');
    setIsShowingCopied(true);
    setTimeout(() => {
      setIsShowingCopied(false);
    }, 1000);
  };

  return (
    <button
      className={styles.contactButton}
      onClick={handleButtonClick}
      type="button"
    >
      {isShowingCopied ? (
        <span className={styles.copied}>Copied!</span>
      ) : (
        <span className={styles.email}>topd3vs@gmail.com</span>
      )}
    </button>
  );
}

export default ContactButton;
