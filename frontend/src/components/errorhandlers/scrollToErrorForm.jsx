// in my ScrollToError.tsx file...
import { useFormikContext } from "formik";
import React, { useEffect } from "react";

export function ScrollToError() {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  useEffect(() => {
    const el = document.querySelector(".Mui-error, [data-error]");
    // (el?.parentElement ?? el)?.scrollIntoView();
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.focus({ preventScroll: true });
    console.log(el);
  }, [submitting]);
  return null;
}
