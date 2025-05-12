interface PartnershipsSectionProps {
  partnershipText: string;
}

export default function PartnershipsSection({
  partnershipText,
}: PartnershipsSectionProps) {
  return (
    <div className="my-16 bg-[#D6E0B6] p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-[#2f4858]">Partnerships</h2>
      <p className="text-lg text-gray-700">{partnershipText}</p>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Become a Partner</h3>
        <p className="mb-4">
          We welcome organizations and companies that share our values and
          mission to join us in our peace-building efforts.
        </p>
        <a
          href="#"
          className="inline-block bg-[#2f4858] text-white py-2 px-6 rounded-full font-medium hover:bg-[#2f4858] transition-colors"
        >
          Partner With Us
        </a>
      </div>
    </div>
  );
}
