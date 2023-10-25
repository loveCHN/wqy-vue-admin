//@ts-ignore
import md5 from "md5";
export const JsonSort = (jsonData: any, keys: string) => {
  jsonData.timestamp = Date.now();
  let sign = "";
  let sdic = Object.keys(jsonData).sort();
  sdic.forEach((item, index) => {
    if (
      jsonData[sdic[index]] !== undefined &&
      jsonData[sdic[index]] !== null &&
      jsonData[sdic[index]] !== ""
    ) {
      if (sign) sign += "&";
      sign += item.toLowerCase() + "=" + jsonData[sdic[index]];
    }
  });
  sign += `${keys}`;
  jsonData.sign = md5(sign);
  return jsonData;
};
