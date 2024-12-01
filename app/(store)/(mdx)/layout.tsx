export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      {children}
    </div>
  )
}