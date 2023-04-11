import { asset } from "$fresh/runtime.ts";
import { boolState } from "#/utils.ts";

const styles = {
  container: `flex flex-wrap items-center justify-around w-full bg-white-light shadow-sm lg:p-2`,
  created_at: `flex-shrink-0 sm:w-auto text-sm font-bold`,
  logo: `w-12 h-12 sm:w-16 sm:h-16 object-cover`,
  arrow: `w-4 h-4 sm:w-6 sm:h-6`,
  target: `flex-shrink-0 sm:w-auto text-sm break-all flex items-center`,
  amount_asset: `flex-shrink-0 sm:w-auto text-sm font-bold`,
  buttonStatus: `flex justify-between lg:w-40 w-15 max-h-10 px-5 py-2 text-left rounded-sm`,
  buttonStatusWaiting: `text-gray-dark bg-gray-cool`,
  buttonStatusRejected: `bg-red-500 text-white-light`,
  buttonStatusSuccess: `bg-green-dark text-white-light`,
  containerDetails: `flex grid grid-cols-3 gap-4 items-center justify-around w-full lg:p-2`,
  column: `flex flex-col`,
  bigButton: `row-span-2 self-center bg-gray-dark w-full h-3/4 items-center text-white-light justify-center`,
  input: `m-0.5 p-0.5 shadow-md placeholder-gray-500 w-full`,
  label: `font-bold m-0.5 p-0.5`,
};
const truncateString = (str: string, maxLength = 20) =>
  str.length <= maxLength ? str : str.slice(0, maxLength) + "...";

export default ({ operations }) => operations.map(Transaction);

function Transaction({
  target,
  isIncoming,
  amount,
  asset_code,
  created_at,
  status = "success",
}) {
  const [isDetailsActive, toggleDetails] = boolState();
  return (
    <div class={styles.container} onClick={toggleDetails}>
      <span class={styles.created_at}>{created_at}</span>
      <Logo />
      <div class={styles.target}>
        <Arrow isIncoming={isIncoming} />
        <span>{truncateString(target)}</span>
      </div>
      <span class={styles.amount_asset}>
        {amount} {asset_code}
      </span>
      <StatusButton status={status} />
      {isDetailsActive ? <Details /> : null}
    </div>
  );
}
const Arrow = ({ isIncoming }) => {
  return (
    <img
      class={styles.arrow}
      src={asset(isIncoming ? "/incoming-arrow.svg" : "/outcoming-arrow.svg")}
    />
  );
};

const Logo = () => <img class={styles.logo} src={asset("/lk-logo.svg")} />;

function StatusButton({ status }) {
  const [localStyle, text, image] =
    status === "waiting"
      ? [styles.buttonStatusWaiting, "В ожидании", "btn-waiting"]
      : status === "reject"
      ? [styles.buttonStatusRejected, "Отклонено", "btn-reject"]
      : [styles.buttonStatusSuccess, "Завершено", "btn-ok"];
  return (
    <button class={`${styles.buttonStatus} ${localStyle}`}>
      <span class="hidden lg:inline-block">{text}</span>
      <img src={asset(`./${image}.svg`)} />
    </button>
  );
}
function Details() {
  return (
    <div className={styles.containerDetails}>
      <div className={styles.column}>
        <StatusInput />
        <TimeInput />
      </div>
      <div className={styles.column}>
        <TransactionHashInput />
        <NetworkFeeInput />
      </div>
      <ViewOnExplorer />
    </div>
  );
}
function StatusInput() {
  return (
    <label class={styles.label} htmlFor="Статус">
      Статус:
      <input
        class={styles.input}
        type="text"
        id="Статус"
        placeholder="Успешно"
      />
    </label>
  );
}
function TimeInput() {
  return (
    <label class={styles.label} htmlFor="Время">
      Время:
      <input
        class={styles.input}
        type="text"
        id="Время"
        placeholder="12 дек 2018 05:37:54"
      />
    </label>
  );
}
function TransactionHashInput() {
  return (
    //
    <label class={styles.label} htmlFor="Хэш_транзакции">
      Хэш транзакции:
      <input
        class={styles.input}
        type="text"
        id="Хэш_транзакции"
        placeholder="jbfkjbj4453vvfvmbajhnm564ybjldg9rkjkj"
      />
    </label>
  );
}
function NetworkFeeInput() {
  return (
    <label class={styles.label} htmlFor="Комиссия_сети">
      Комиссия сети:
      <input
        class={styles.input}
        type="text"
        id="Комиссия_сети"
        placeholder="0.1563758234 LTC"
      />
    </label>
  );
}
const ViewOnExplorer = () => (
  <button class={styles.bigButton}>ПОСМОТРЕТЬ НА ЭКСПЛОРЕРЕ</button>
);
