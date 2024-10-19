import { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";

export const useVForm = () => {

    const formRef = useRef<FormHandles>(null);

    const IsSaveAndClose = useRef(false);
    const isSaveAndNew = useRef(false);

    const handleSave = useCallback(() => {
        IsSaveAndClose.current = false;
        isSaveAndNew.current = false;
        formRef.current?.submitForm();
    }, []);

    const handleSaveAndNew = useCallback(() => {
        IsSaveAndClose.current = false;
        isSaveAndNew.current = true;
        formRef.current?.submitForm();
    }, []);

    const handleSaveAndClose = useCallback(() => {
        IsSaveAndClose.current = true;
        isSaveAndNew.current = false;
        formRef.current?.submitForm();
    }, []);

    const handleIsSaveAndNew = useCallback(() => {
        return isSaveAndNew.current;
    }, []);

    const handleIsSaveAndClose = useCallback(() => {
        return IsSaveAndClose.current;
    }, []);


    return {
        formRef,
        save: handleSave,
        saveAndNew: handleSaveAndNew,
        saveAndClose: handleSaveAndClose,
        isSaveAndNew: handleIsSaveAndNew,
        isSaveAndClose: handleIsSaveAndClose,
    };
};