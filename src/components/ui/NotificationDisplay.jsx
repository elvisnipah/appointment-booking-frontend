import { useSelector } from "react-redux";

const NotificationDisplay = () => {
  const notification = useSelector(({ notification }) => notification);

  const Message = () => {
    switch (notification) {
      case "missing-form-value":
        return "There are one or more details missing in the form!";
      case "incorrect-phone-number":
        return "Incorrect number. Make sure the format is: 0xxxxxxxxx";
      case "login-fail":
        return "Wrong username/password. Try again.";
      default:
        return notification;
    }
  };

  return (
    <dialog id="my_modal_2" className="modal z-50">
      <div className="modal-box">
        {/* <h3 className="font-bold text-lg">Hello!</h3> */}
        <p className="py-4 font-sans text-center">{<Message />}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default NotificationDisplay;
