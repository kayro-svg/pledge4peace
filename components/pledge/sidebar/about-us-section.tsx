import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div>
      <h3 className="text-lg text-[#2F4858] font-bold mb-4">About us</h3>
      <div className="flex items-center gap-3 mb-4">
        <div className="relative h-10 w-10 rounded-full overflow-hidden">
          <Image
            src="/p4p_rounded_logo.png"
            alt="Pledge4Peace"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-sm">Pledge4Peace</h4>
          <p className="text-xs text-gray-600">
            A global community united in the pursuit of peace.
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        We are a group of Peace Advocates. We have worked tirelessly in the last
        few weeks and launched Pledge4Peace with a dream hope to halt further
        atrocities and resolve the 75+ year-old Israel and Palestine issue.
      </p>
    </div>
  );
}
