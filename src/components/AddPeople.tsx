import React, { FC, FormEvent, useState } from "react";

import { IProps } from "../utils/interfaces";

const AddPeople: FC<IProps["listAndAdd"]> = ({ peoples, setPeoples }) => {
  const [fullName, setFullName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [img_url, setImg_url] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleResetState = (): void => {
    setFullName("");
    setAge("");
    setImg_url("");
    setBio("");
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!fullName) {
      return alert("لطفا نام و نام خانوادگی خود را وارد نمایید.");
    } else if (!age) {
      return alert("لطفا سن خود را وارد نمایید.");
    } else if (!img_url) {
      return alert("لطفا عکس خود را وارد نمایید.");
    }

    setPeoples([
      ...peoples,
      {
        id: Math.floor(Math.random() * 10000),
        fullName,
        age: Number(age),
        img_url,
        bio,
      },
    ]);

    handleResetState();
  };

  return (
    <div className="col-md-6 col-lg-6 mx-auto">
      <form
        className="mt-3"
        autoComplete="off"
        onSubmit={(event) => handleSubmitForm(event)}
      >
        <input
          type="text"
          className="form-control mb-2"
          name="fullName"
          placeholder="نام و نام خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          name="age"
          placeholder="سن"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="img_url"
          placeholder="ادرس عکس پروفایل"
          value={img_url}
          onChange={(e) => setImg_url(e.target.value)}
        />
        <textarea
          rows={7}
          className="form-control mb-2"
          name="bio"
          placeholder="توضیحات و بیوگرافی"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className="btn btn-success btn-lg">افزودن به لیست</button>
      </form>
    </div>
  );
};

export default AddPeople;
