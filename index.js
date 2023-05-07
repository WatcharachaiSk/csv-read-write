const csv = require("csv-parser");
const fs = require("fs");
const _ = require("lodash");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const results = [];
//TODO นำไฟล์เข้า
fs.createReadStream("path/parser/file.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    // console.log(results[0]);
    let arrP = [];
    let arrP2 = [];
    let j = 0;
    for (let index = 0; index < results.length; index++) {
      const restTF = _.map(results[index], (item, idx) => {
        // console.log(idx);

        // idx != 1 ไม่คำนวนวันที่ วันที่อยู่ที่ idx 1 
        if (item > 3600 && idx != 1) {
          arrP2[j] = results[index];
          j++;
        } else {
        }
        return item;
      });

      // arrP[index] = restTF;
    }

    // console.log(arrP);
    // console.log("arrP2 is ", arrP2);
    // const restArrP2 = _.map(arrP2[0], (item) => {

    // });
    let arrFOR = [];
    for (let index = 0; index < arrP2.length; index++) {
      // console.log(arrP2[0]);
      arrFOR[index] = {
        name_en: arrP2[index].name_en,
        id: arrP2[index].id,
        ict_date: arrP2[index].ict_date,
        code: arrP2[index].code,
        h00: arrP2[index].h00,
        h01: arrP2[index].h01,
        h02: arrP2[index].h02,
        h03: arrP2[index].h03,
        h04: arrP2[index].h04,
        h05: arrP2[index].h05,
        h06: arrP2[index].h06,
        h07: arrP2[index].h07,
        h08: arrP2[index].h08,
        h09: arrP2[index].h09,
        h10: arrP2[index].h10,
        h11: arrP2[index].h11,
        h12: arrP2[index].h12,
        h13: arrP2[index].h13,
        h14: arrP2[index].h14,
        h15: arrP2[index].h15,
        h16: arrP2[index].h16,
        h17: arrP2[index].h17,
        h18: arrP2[index].h18,
        h19: arrP2[index].h19,
        h20: arrP2[index].h20,
        h21: arrP2[index].h21,
        h22: arrP2[index].h22,
        h23: arrP2[index].h23,
      };
    }
    // console.log(arrFOR);

    //TODO นำไฟล์ออก
    const csvWriter = createCsvWriter({
      path: "path/writer/csv/file.csv",
      header: [
        { id: "name_en", title: "name_en" },
        { id: "id", title: "id" },
        { id: "ict_date", title: "ict_date" },
        { id: "code", title: "code" },
        { id: "h00", title: "h00" },
        { id: "h01", title: "h01" },
        { id: "h02", title: "h02" },
        { id: "h03", title: "h03" },
        { id: "h04", title: "h04" },
        { id: "h05", title: "h05" },
        { id: "h06", title: "h06" },
        { id: "h07", title: "h07" },
        { id: "h08", title: "h08" },
        { id: "h09", title: "h09" },
        { id: "h10", title: "h10" },
        { id: "h11", title: "h11" },
        { id: "h12", title: "h12" },
        { id: "h13", title: "h13" },
        { id: "h14", title: "h14" },
        { id: "h15", title: "h15" },
        { id: "h16", title: "h16" },
        { id: "h17", title: "h17" },
        { id: "h18", title: "h18" },
        { id: "h19", title: "h19" },
        { id: "h20", title: "h20" },
        { id: "h21", title: "h21" },
        { id: "h22", title: "h22" },
        { id: "h23", title: "h23" },
      ],
    });

    const data = arrFOR;

    csvWriter
      .writeRecords(data)
      .then(() => console.log("The CSV file was written successfully"));

    // console.log("arrP is ", arrP);
  });
