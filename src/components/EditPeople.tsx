import React, { FC, FormEvent, Fragment, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Modal } from "react-bootstrap";

import { IProps, IStates } from "../utils/interfaces";

const EditPeople: FC<IProps["edit"]> = ({ people, peoples, setPeoples }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>(people.fullName);
  const [age, setAge] = useState<number | string >(people.age);
  const [img_url, setImg_url] = useState<string>(people.img_url);
  const [bio, setBio] = useState<string | undefined>(people.bio);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!fullName) {
      return alert("لطفا نام و نام خانوادگی خود را وارد نمایید.");
    } else if (!age) {
      return alert("لطفا سن خود را وارد نمایید.");
    } else if (!img_url) {
      return alert("لطفا عکس خود را وارد نمایید.");
    }

    const persons: IStates["peoples"] = [...peoples];
    const findIndexPeople: number = persons.findIndex(
      (person) => person.id === people.id
    );
    persons[findIndexPeople] = {
      id: people.id,
      fullName,
      age: Number(age),
      img_url,
      bio,
    };

    setPeoples(persons);
    setShowModal(false);

  };

  return (
    <Fragment>
      <FaUserEdit
        className="text-warning m-1"
        size={30}
        onClick={() => setShowModal(true)}
      />
      <Modal
        size="lg"
        centered
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header>
          <Modal.Title>{people.fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="mt-3"
            autoComplete="off"
            onSubmit={(event) => handleSubmitForm(event)}
          >
            <input
              className="form-control mb-2"
              type="text"
              value={fullName}
              name="fullName"
              placeholder="نام و نام خانوادگی"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="form-control mb-2"
              type="number"
              value={age}
              name="age"
              placeholder="سن"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              className="form-control mb-2"
              type="text"
              value={img_url}
              name="img_url"
              placeholder="آدرس عکس پروفایل"
              onChange={(e) => setImg_url(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              rows={7}
              value={bio}
              name="bio"
              placeholder="توضیحات و بیوگرافی"
              onChange={(e) => setBio(e.target.value)}
            />
            <button type="submit" className="btn bg-success">
              ویرایش اطلاعات
            </button>
            <button
              type="button"
              className="btn bg-danger me-2"
              onClick={() => setShowModal(false)}
            >
              بستن
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EditPeople;
