export default function AddressView({ address }: { address: string }) {
    return <span class="text-xs" title="Нажмите, чтобы скопировать адрес кошелька в буфер обмена" onClick={_ => navigator.clipboard.writeText(address)}>
        ВАШ КОШЕЛЕК:
        <span class="text-gray-600 ml-2 hover:cursor-pointer">{limitString(address, 70, "..")}</span>
    </span>
}

function limitString(str: string, limit: number, end = "..."): string {
  return str.length > limit ? str.substring(0, limit-3).concat(end) : str;
}
