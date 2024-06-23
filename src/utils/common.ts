import { Information } from "@/store/useFormStore";

export const passkitTemplateJson = (data: Information) => {
  const language = "en-US";
  const logo = {
    sourceUri: {
      uri: data.logo,
    },
    contentDescription: {
      defaultValue: {
        language,
        value: "LOGO_IMAGE_DESCRIPTION",
      },
    },
  };
  const cardTitle = {
    defaultValue: {
      language,
      value: data.title,
    },
  };
  const barcode = {
    type: "QR_CODE",
    value: data.qrCode,
    alternateText: data.qrCode,
  };
  const hexBackgroundColor = data.hexBackgroundColor;
  return {
    id: "ISSUER_ID.OBJECT_ID",
    classId: "ISSUER_ID.GENERIC_CLASS_ID",
    logo,
    cardTitle,
    barcode,
    hexBackgroundColor,
  };
};


export const checkingHexColorIsLight = (color: string) => {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155; // > 155 is light
}