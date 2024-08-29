import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex gap-1 hover:cursor-pointer hover:opacity-80">
      <Image src="/logo.png" height={30} width={30} alt="Logo" />
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Tasks
      </h4>
    </div>
  )
}
