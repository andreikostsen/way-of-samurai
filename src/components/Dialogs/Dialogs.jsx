import s from "./Dialogs.module.css"


 const Dialogs=()=> {

    return(

            <div className={s.wrapper}>
                <div className={s.items}>
                    <div className={s.item + " " + s.active}>Andrei</div>
                    <div className={s.item}>Valera</div>
                </div>
                <div className={s.messages}>
                    <div>Message1</div>
                    <div>Message1</div>
                    <div>Message1</div>
                </div>
            </div>

    )

}

export default Dialogs;