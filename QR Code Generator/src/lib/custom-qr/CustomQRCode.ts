import QRCodeStyling, { Options, DotType, CornerSquareType, CornerDotType } from "qr-code-styling";

export type CustomPatternType = 
  | "square"
  | "extra-rounded"
  | "dots";

function mapCustomPatternToDotType(pattern?: CustomPatternType): DotType {
  switch (pattern) {
    case "dots":
      return "dots";
    case "extra-rounded":
      return "classy-rounded";
    default:
      return "square";
  }
}

function mapCustomPatternToCornerSquareType(pattern?: CustomPatternType): CornerSquareType {
  switch (pattern) {
    case "extra-rounded":
      return "extra-rounded";
    default:
      return "square";
  }
}

function mapCustomPatternToCornerDotType(pattern?: CustomPatternType): CornerDotType {
  switch (pattern) {
    case "extra-rounded":
      return "dot";
    default:
      return "square";
  }
}

type CustomOptions = Omit<Options, 'dotsOptions' | 'cornersSquareOptions' | 'cornersDotOptions'> & {
  dotsOptions?: {
    type?: CustomPatternType;
    color?: string;
    gradient?: {
      type: "linear" | "radial";
      rotation: number;
      colorStops: Array<{
        offset: number;
        color: string;
      }>;
    };
  };
  cornersSquareOptions?: {
    type?: CustomPatternType;
    color?: string;
  };
  cornersDotOptions?: {
    type?: CustomPatternType;
    color?: string;
  };
}

export const createCustomQRCode = (options: CustomOptions) => {
  const defaultOptions = {
    width: options.width || 300,
    height: options.height || 300,
    data: options.data || "",
    margin: 10,
    qrOptions: {
      errorCorrectionLevel: options.qrOptions?.errorCorrectionLevel || 'M'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 0
    },
    dotsOptions: {
      type: mapCustomPatternToDotType(options.dotsOptions?.type),
      color: options.dotsOptions?.color || "#000000",
      gradient: options.dotsOptions?.gradient
    },
    cornersSquareOptions: {
      type: mapCustomPatternToCornerSquareType(options.cornersSquareOptions?.type),
      color: options.cornersSquareOptions?.color || "#000000"
    },
    cornersDotOptions: {
      type: mapCustomPatternToCornerDotType(options.cornersDotOptions?.type),
      color: options.cornersDotOptions?.color || "#000000"
    },
    backgroundOptions: {
      color: "#ffffff",
    }
  };

  return new QRCodeStyling(defaultOptions);
};