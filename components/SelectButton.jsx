import React, { Fragment } from "react";
import clsx from "clsx";
import { Listbox, Transition } from "@headlessui/react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

export default function SelectButton({ selected, onChange, options, height = "default" }) {
  return (
    <div className='relative w-full'>
      <Listbox value={selected} onChange={(e) => onChange({ target: { name: e } })}>
        <Listbox.Button className={clsx(" font-inter text-sm font-normal w-full text-left", { "py-[10px] px-[14px]": height == "default", "px-[14px] h-14": height == "large" })}>
          {({ open }) => (
            <div className='flex gap-5 items-center'>
              <span className='block truncate w-10/12'>{options.find((x) => x.id === selected)?.value}</span>
              <span className='w-2/12 pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-2'>
                <BiChevronDown className={clsx("h-5 w-5 text-gray-400 transition-transform ease-in-out", { "rotate-180": open })} aria-hidden='true' />
              </span>
            </div>
          )}
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-1  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 sm:text-sm'>
            {options.map((item, i) => (
              <Listbox.Option key={i} className={({ active }) => `relative cursor-default select-none py-[10px] px-2 rounded m-[6px]  ${active ? "bg-[#E6F4FC] " : "text-gray-900"}`} value={item.id}>
                {({ selected }) => (
                  <>
                    <p className={`block  ${selected ? "font-medium" : "font-normal"}`}>{item.value}</p>
                    {selected ? (
                      <p className='absolute inset-y-0 right-[8px] flex items-center pl-3 text-amber-600'>
                        <BiCheck className='text-xl text-[#0093DE]' />
                      </p>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
