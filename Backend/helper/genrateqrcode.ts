import QRCode from 'qrcode';

export async function genrateqrcode(url : string){
    return await QRCode.toDataURL(url);
}