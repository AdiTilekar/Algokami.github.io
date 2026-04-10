import SectorPackagesSection from '@/components/sections/SectorPackagesSection'

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SectorPackagesSection sector="Every Sector" />
    </>
  )
}
