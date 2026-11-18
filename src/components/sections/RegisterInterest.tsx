"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const formUrl = "https://ab499a85.sibforms.com/v2/serve/MUIFAEo7jWq6-gwF8uH2xmZL1hvmuMmqgQSndrEJmPN3DgbAHUmnXHYPmVolKrZfHBwF9ozLL7_dgq3mInV68Ah7URwK2ECDVUqlsdw61Hio_jgvgULwzkTZLyFyeKCK_cuH1LLyDPUJDEqnhPEVbwKEZA5Zf-Zr6v68rtSdm3smisZuHxVtYJknuGBFRr28xQclRfYopM7-DKTaIQ==";

export default function RegisterInterest() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    let previousOverflow = "";
    let scrollLocked = false;
    const unlockScroll = () => {
      if (scrollLocked) document.body.style.overflow = previousOverflow;
      scrollLocked = false;
    };
    const open = () => {
      if (dialog.open) return;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = "hidden";
      scrollLocked = true;
    };
    const onHashChange = () => {
      if (window.location.hash === "#register-interest") open();
    };
    const onLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      const link = target instanceof Element ? target.closest("a") : null;
      if (!link) return;
      const url = new URL(link.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash === "#register-interest") {
        event.preventDefault();
        open();
      }
    };

    dialog.addEventListener("close", unlockScroll);
    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onLinkClick);
    open();

    return () => {
      dialog.removeEventListener("close", unlockScroll);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onLinkClick);
      dialog.close();
      unlockScroll();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="register-interest"
      aria-labelledby="register-interest-heading"
      aria-describedby="register-interest-description"
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl backdrop:bg-black/75 md:p-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
        }
      }}
    >
      <div className="mb-4 flex justify-end">
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e35e9f]">
          Close <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 id="register-interest-heading" className="text-5xl text-white md:text-6xl" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
            Wales <span className="text-[#e35e9f]">Driving Tour</span>
          </h2>
          <p className="mt-4 text-xl font-semibold text-[#e35e9f]">19–21 March 2027</p>
          <p id="register-interest-description" className="mx-auto mt-4 max-w-xl text-lg text-gray-300">
            Register your interest in our Wales Driving Tour and receive updates as plans are announced.
          </p>
          <div className="mx-auto mt-8 max-w-[540px] overflow-hidden rounded-2xl bg-white">
            <iframe
              title="Register your interest in the Wales Driving Tour, 19–21 March 2027"
              src={formUrl}
              width="540"
              height="450"
              className="block w-full border-0"
            />
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Check your inbox after signing up to confirm your email address.
          </p>
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-[#e35e9f] underline underline-offset-4 hover:text-white">
            Open the signup form in a new tab
          </a>
        </div>
        <Image
          src="/events/WALES-DRIVE-MARCH-2027.jpg"
          alt="Wales Driving Tour, 19–21 March 2027"
          width={2160}
          height={2700}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full rounded-2xl"
        />
      </div>
    </dialog>
  );
}
