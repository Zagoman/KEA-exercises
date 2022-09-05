"use strict";

/**
 * Model
 */
const students = [];
const Student = {
  firstName: null,
  middleName: null,
  lastName: null,
  nickName: null,
  imageSrc: null,
  gender: null,
  house: null,

  cleanInitialData(fullName = null) {
    if (fullName) {
      let fullNameArr = fullName.split(" ");
      while (fullNameArr.includes("")) {
        fullNameArr.splice(fullNameArr.indexOf(""), 1);
      }
      fullNameArr.forEach((el, i) => {
        el = el.toLowerCase();
        el = el[0].toUpperCase() + el.substring(1);
        fullNameArr[i] = el;
      });
      let output = this.findNickName(fullNameArr);
      return output.join(" ");
    }
  },

  findFirstName(fullName) {
    let cleanedName = this.cleanInitialData(fullName);
    // console.log(cleanedName);
    if (cleanedName.includes(" ")) {
      this.firstName = cleanedName.substring(0, cleanedName.indexOf(" "));
    } else {
      this.firstName = cleanedName;
    }
  },

  findMiddleName(fullName) {
    let cleanedName = this.cleanInitialData(fullName);
    if (cleanedName.split(" ").length > 2) {
      this.middleName = cleanedName.substring(cleanedName.indexOf(" ") + 1, cleanedName.lastIndexOf(" "));
    }
  },

  findLastName(fullName) {
    let cleanedName = this.cleanInitialData(fullName);
    if (cleanedName.includes(" ")) {
      this.lastName = cleanedName.substring(cleanedName.lastIndexOf(" ") + 1);
    }
  },

  findNickName(cleanedNameArr) {
    cleanedNameArr.forEach((el, i) => {
      if (el.includes('"')) {
        this.nickName = cleanedNameArr.splice(cleanedNameArr.indexOf(el), 1).toString();
        this.nickName = this.nickName.substring(1, this.nickName.length - 1);
        this.nickName = this.nickName[0].toUpperCase() + this.nickName.substring(1);
      }
    });
    return cleanedNameArr;
  },

  findImageSrc() {
    this.imageSrc;
  },

  findHouse(house) {
    this.house = house.trim().toLowerCase();
    this.house = this.house[0].toUpperCase() + this.house.substring(1);
  },

  findGender(gender) {
    this.gender = gender.trim();
    this.gender = this.gender[0].toUpperCase() + this.gender.substring(1);
  },
};
async function loadJSON() {
  const res = await fetch("https://petlatkea.dk/2021/hogwarts/students.json");
  const JSONData = await res.json();
  populateStudents(JSONData);
  console.table(students);
}

function populateStudents(data) {
  // console.table(data);
  data.forEach((entry) => {
    let student = Object.create(Student);
    student.findFirstName(entry.fullname);
    student.findLastName(entry.fullname);
    student.findMiddleName(entry.fullname);
    student.findImageSrc();
    student.findHouse(entry.house);
    student.findGender(entry.gender);
    students.push(student);
    // console.log(student);
  });
}

/**
 * Controller
 */
function init() {
  console.log("start");
  loadJSON();
}

document.addEventListener("DOMContentLoaded", init);

/**
 * View
 */
