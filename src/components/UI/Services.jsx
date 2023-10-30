import {
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  CodeBracketIcon,
  UserGroupIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Review Technical Product Requirement",
    description:
      "Involves understanding the requirements, identifying any potential problems, and making sure that the requirements are feasible to implement.",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    name: "Design Testcase",
    description:
      "designing and developing test cases(Test Scenario and UAT Document). It is the process can used the software and ensure that it meets the requirements.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Develop and Execute Test Framework",
    description:
      "Automate the testing of software help to save time and effort by automating repetitive tasks (Web Automation E2E, UI Testing, API Automation, Performance Testing, Mobile Testing).",
    icon: CodeBracketIcon,
  },
  {
    name: "Test Management",
    description:
      "Controlling all testing activities for a software project. helps to ensure that the software is tested thoroughly before release to the end users.",
    icon: ArrowPathIcon,
  },
  {
    name: "Collaborate With Internal and External Teams",
    description:
      "Involves collaborating with developers, product managers, devops team and other stakeholders.",
    icon: UserGroupIcon,
  },
  {
    name: "Identify Reporting Test Result",
    description:
      "Communicating the results of testing to the stakeholders to understand the progress and identify any potential problems.",
    icon: ShieldCheckIcon,
  },
];

export default function Example() {
  return (
    <div id='services' className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What I Do as SDET - QA ?
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative pl-16 dt-container"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900 dt-icon">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryColor">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </dt>
              <dt className="text-base font-semibold leading-7 text-gray-900 dt-name">
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dt-description">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      </div>
    </div>
  );
}
