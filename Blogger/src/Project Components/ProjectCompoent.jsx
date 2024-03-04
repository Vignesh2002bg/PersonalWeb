
function ProjectComponent() {
  const CardData = [
    {url: 'https://img.freepik.com/free-vector/recruitment-agency-searching-job-candidates_1262-19874.jpg?t=st=1709542412~exp=1709546012~hmac=a85755807462be7e55b14b9c92f6e51d943e333fff9818b677119ebdde1a72b8&w=740', description: 'An application that provides information to help users apply for jobs. Key Features:User-friendly interface,Matching job opportunities with users  skills .....',Title:'Skill and Job Recommender',Tech1:'React JS', Tech2:'Spring Boot', Tech3:'Cloud',source:'https://github.com/Vignesh2002bg/IBM-Project-28144-1660107315'},
    {url: 'https://img.freepik.com/free-vector/business-top-management-online-service-platform-successful-strategy-motivation-leadership-project-manager-online-management-isolated-vector-illustration_613284-1470.jpg?t=st=1709542496~exp=1709546096~hmac=2ed1beac0f74dc35fe9ab4da3cd216c30df466957f0684003762814432dc21b6&w=826',Title:'Employee Management System', description: 'The Employee Management System is a web application built using Spring Boot for the backend and React for the frontend. It allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records.Technology Stack:Backend..',Tech1:'Spring Boot', Tech2:'JSP & API', Tech3:'CURD & POSTMAN',source:'https://github.com/Vignesh2002bg/EmployeeManagement'},
      {url: 'https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?w=826', description: 'An application that provides four main functionalities for managing railway reservations.Functionalities: Booking tickets ,Canceling tickets,Printing bookedtickets....' ,Title:'Railway Reservation System',Tech1:'Core Java', Tech2:'Collections', Tech3:'CURD',source:' https://github.com/Vignesh2002bg/Railway-Reservation-System.git'},
      {url: 'https://img.freepik.com/free-photo/girl-sitting-table-looking-notebook_23-2147657343.jpg?w=826&t=st=1709542191~exp=1709542791~hmac=4ce8e1dd909d767a1582a48a3c6c4ef3259d19b87a43a7a2fba57781ad7d9ac9', description: 'Book Shop is an e-commerce website designed for shopping. The website w for customers to browse and purchase books online.as created using Notepad as the tool and HTML, CSS, and ..',Title:'Book Shop',Tech1:'HTML5/CSS3', Tech2:'Bootstrap 5', Tech3:'Front-End',source:'https://github.com/Vignesh2002bg/BookShop_FrontEnd.git'},
      
  ];

  return ( 
      <div className="">
      <div className="container mx-auto  w-[92%] justify-center items-center  ">
        <h1 className=" text-[#432749] font-bold text-center text-2xl mt-16 mb-10">Project Source</h1>
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-3 mb-5">
          {CardData.map((data)=>
          <div class=" w-auto h-auto rounded overflow-hidden shadow-lg">
          <img class=" object-contain h-auto w-auto" src={data.url} alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{data.Title}</div>
            <p class="text-gray-700 text-base">
             {data.description}
            </p>
          </div>
          <div className="px-6 py-2 flex mx-auto ">
            <h1 className=" text-sm font-bold mr-3">Source Link</h1>
            < a href={data.source}><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
          </svg>
          </span></a>
          </div>
          <div class="px-6 pt-4 pb-2">
          <h1 className=" text-sm font-bold mb-4">Tech Stack</h1>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.Tech1}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.Tech2}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.Tech3}</span>
          </div>
        </div>
          )}
        </div>
      </div>
      </div>
  );
}

export default ProjectComponent;
