import { withdraw10k, withdraw5k } from "../../reducers/withdrawSlice";
import Buttons from "../Buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import styles from "./TransactionPage.module.css";

const TransactionPage = () => {
  const username = useSelector((store) => store.transaction.userName);
  const mainBalance = useSelector((store) => store.transaction.balance);
  const currencyFormat = Intl.NumberFormat(`en-US`);

  const dispatch = useDispatch();

  const withdraw10kHandler = () => {
    dispatch(withdraw10k());
  };

  const withdraw5kHandler = () => {
    dispatch(withdraw5k());
  };

  return (
    <>
      <h1 className={styles.userName}>Hi, {username}</h1>
      <div className={styles.userBalance}>
        $ {currencyFormat.format(mainBalance)}
      </div>
      <div className={styles.btns}>
        <Buttons
          btnName="Withdraw $10,000"
          btnStyles={styles.withdraw10k}
          onClickHandler={withdraw10kHandler}
        />
        <Buttons
          btnName="Withdraw $5,000"
          btnStyles={styles.withdraw5k}
          onClickHandler={withdraw5kHandler}
        />
      </div>
    </>
  );
};
export default TransactionPage;
