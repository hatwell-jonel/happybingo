import { cn } from "@/lib/utils";
import { SectionType } from "../page";


export default function FairAndSafeGaming({ sectionClass }: SectionType) {
  return (
    <section className={cn(sectionClass)} id="fair-and-safe-gaming">
      <div className="container-center">
        FairAndSafeGaming
      </div>
    </section>
  )
}