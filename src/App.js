import React, { useState } from 'react';
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { AppLayout } from '@cloudscape-design/components';

function currentContent(activeRef) {

  if(activeRef === "#/employees"){
    return "employees";
  }
  
  if(activeRef === "#/reports") {
    return "reports";
  }

  if(activeRef.includes("employees")) {
    return "employee";
  }

  return "report";
}


function App() {
  const [activeHref, setActiveHref] = useState(
    "#/employees");


  return (
    <AppLayout
      navigation={
        <SideNavigation
          activeHref={activeHref}
          header={{ href: "#/", text: "Navigation" }}
          onFollow={event => {
            if (!event.detail.external) {
              event.preventDefault();
              setActiveHref(event.detail.href);
            }
          }}
          items={[
            {
              type: "expandable-link-group",
              text: "Employees",
              href: "#/employees",
              items: [
                {
                  type: "link",
                  text: "Employee 1",
                  href: "#/employees/employee1"
                },
                {
                  type: "link",
                  text: "Employee 2",
                  href: "#/employees/employee2"
                },
                {
                  type: "link",
                  text: "Employee 3",
                  href: "#/employees/employee3"
                }
              ]
            },
            {
              type: "expandable-link-group",
              text: "Reports",
              href: "#/reports",
              items: [
                {
                  type: "link",
                  text: "Performance",
                  href: "#/reports/performance"
                },
                {
                  type: "link",
                  text: "Behavior",
                  href: "#/reports/behavior"
                }
              ]
            },
          ]}
        />
      }
      
      content={currentContent(activeHref)}>
    </AppLayout>
  );
}

export default App;