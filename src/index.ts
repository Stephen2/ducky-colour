import { devices, HID } from 'node-hid';
import { isUndefined } from './utils/isDefined.js';

// Define constants for your Ducky keyboard
// You can find these by running npx node-hid
const DUCKY_VENDOR_ID = 12851; // 0x3233 in hex
const DUCKY_PRODUCT_ID = 24; // 0x0018 in hex

const connectToKeyboard = () => {
  const allDevices = devices();

  const keyboardInfo = allDevices.find(
    (_) =>
      _.vendorId === DUCKY_VENDOR_ID &&
      _.productId === DUCKY_PRODUCT_ID &&
      _.usagePage === 65308,
  );

  if (isUndefined(keyboardInfo)) {
    throw new Error(
      'Ducky keyboard not found. Check your Vendor and Product IDs.',
    );
  }

  const { product, path } = keyboardInfo;

  if (isUndefined(product) || isUndefined(path)) {
    throw new Error(
      'Ducky keyboard not found. Check your Vendor and Product IDs.',
    );
  }

  console.log(`Connecting to: ${product} at ${path}`);

  return new HID(path);
};

connectToKeyboard();
