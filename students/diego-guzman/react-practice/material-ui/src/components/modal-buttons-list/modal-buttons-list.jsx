
import React from "react"
import ModalButton from "../modal-button/modal-button"
import { Stack } from "@mui/material"

function ModalButtonsList() {


    return (
        <Stack direction="row" spacing={2} justifyContent='center'>
            <ModalButton variant='contained' modalTitle='modal 1 title' modalText='modal 1 text'></ModalButton>
            <ModalButton variant='outlined' modalTitle='modal 2 title' modalText='modal 2 text'></ModalButton>
            <ModalButton variant='text' modalTitle='modal 3 title' modalText='modal 3 text'></ModalButton>
            <ModalButton variant='text' modalTitle='modal 4 title' modalText='modal 4 text'></ModalButton>
        </Stack>
    )
}

export default ModalButtonsList