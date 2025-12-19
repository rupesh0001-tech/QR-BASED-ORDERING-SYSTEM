import QRCode from 'qrcode';

export function genrateqrcode(url : string){
    return QRCode.toDataURL(url);
}