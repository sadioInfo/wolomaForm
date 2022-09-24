import toast, { Toast } from "react-hot-toast";
import {RiNotification3Fill} from "react-icons/ri"

export const notify = (
    text = "Message de notification par defaut",
    state = "success"
) => toast((t) => (
    <div 
        onClick={() => toast.dismiss(t.id)}
        className={"hover:cursor-pointer"}
    >
        <div className="flex items-center justify-center space-x-2">
            <RiNotification3Fill 
                style={{color: state === "success" ? "green" : "red"}}
            />
            <div>{text}</div>
        </div>
    </div>
    ),
    {
        position: "bottom-right",
            style: {
                borderRadius: "0.15rem",
                border:
                    state === "success" ? "1px solid green" : "1px solid red",
            },
    }

)