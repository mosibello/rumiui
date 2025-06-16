"use client";
import React from "react";
import Select from "react-select";
import { useId } from "react";

export default ({
  isMulti,
  options,
  className,
  defaultValue = [],
  onChange,
  onBlur,
  value,
  name,
  instanceId,
}) => {
  const generatedId = useId();

  return (
    <Select
      instanceId={instanceId || generatedId}
      defaultValue={defaultValue}
      isMulti={isMulti}
      name={name}
      options={options}
      className={`basic-multi-select ${className}`}
      classNamePrefix="select"
      closeMenuOnSelect={!isMulti}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      // menuIsOpen
    />
  );
};
