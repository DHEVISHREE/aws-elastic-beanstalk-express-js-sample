const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test 1
A successful DevOps roadmap is a must-have. To better understand why this is the case, let’s consider the results of a recent survey of more than 3,000 global technology professionals conducted by Puppet.

Key takeaways from the Puppet “2018 State of DevOps Report” included:

There are many paths to DevOps failure. The DevOps journey is not linear, and organizations often struggle to effectively scale DevOps across all departments.
Cross-team collaboration drives DevOps success. DevOps requires information sharing and collaboration among all departments.
Automating security policy configurations is mission-critical. Highly evolved organizations are 24 times more likely to automate security policy configurations compared to other organizations.
Additionally, Puppet identified six foundational stages that can be used to create a successful DevOps roadmap:

Stage 0: Build the Foundation

Implement technologies and processes to drive information sharing and collaboration among DevOps team members. Then, DevOps team members can identify the best processes and approaches based on an enterprise, its key stakeholders and other factors.

DevOps team members also must maintain flexibility as they implement assorted technologies and processes. That way, they can update these technologies and processes as needed to keep pace with a fast-moving global marketplace.

Stage 1: Normalize the Technology Stack

Transition to agile development methods and adopt version control, i.e. the first step toward continuous integration (CI) and continuous delivery (CD).

At this point, a DevOps team eliminates redundant systems and refactors applications. This allows the team to normalize its technology stack – something that may lead to faster, more efficient operations than ever before.

Stage 2: Standardize and Reduce Variance

Reduce variance, continue to standardize an enterprise’s technology stack and limit the number of enterprise operating systems and technologies.

A DevOps team must prioritize consolidation and collaboration. If a DevOps team works with different departments to eliminate excess operating systems and technologies, it can set the stage for long-lasting DevOps success.

Furthermore, a DevOps team must apply consistent management and deployment patterns across an enterprise’s applications. This helps minimize the risk of errors. It also helps drive faster application and service deployment and service quality improvements.

Stage 3: Expand DevOps Practices

Address enterprise pain points. To do so, a DevOps team must build applications and services and test infrastructure changes to ensure predictability and reliability.

Over time, DevOps practices may result in a cultural transformation across an enterprise. These practices ultimately help a DevOps team achieve the optimal results, leading to increased trust between this team and various departments.

As a DevOps team builds trust, it may receive permission to perform assorted tasks without executive approval. This helps eliminate bureaucratic overhead, resulting in more efficient workflows that benefit the DevOps team, the enterprise and its key stakeholders.

Stage 4: Automate Infrastructure Delivery

Automate systems configuration and provisioning. This limits the risk of developer throughout outpacing an enterprise’s operations. It also helps a DevOps team deliver systems that match development and quality assurance teams’ production environments.

An automated infrastructure promotes self-service across myriad business departments. It often leads to increased enterprise efficiency and employee satisfaction, too.

Stage 5: Provide Self-Service Capabilities

Make resources available via self-service and automate incident response.

Automation is valuable if DevOps team members understand its potential benefits. By using automation technologies and tools that support an enterprise’s operations, a DevOps team can deliver unprecedented self-service capabilities.

Puppet also recommends that an enterprise consider the following factors as it deploys a DevOps roadmap:

Automation: Start small with automation. As a DevOps team automates enterprise services, it may find innovative ways to automate an enterprise’s operations. At the same time, certain enterprise services may prove to be too complex or expensive to automate. And if the costs of automating certain enterprise services outweigh the benefits, a DevOps team should explore alternative solutions to achieve its desired results.
Culture: A DevOps team can foster a cultural transformation that permeates across an enterprise. It can empower different departments with DevOps best practices to drive operational efficiency. As such, a DevOps team can play a pivotal role in the development of a successful enterprise culture.
Measurement: Highly evolved organizations have significantly higher levels of automated business metrics available on demand in contrast to other organizations, according to Puppet. They also have the lowest level of manually gathered system metrics. Yet some metrics must be collected manually and tracked regularly. These metrics include enterprise revenue, renewal rates, customer acquisition costs, overhead costs and variable cost percentages.
Sharing: Highly evolved organizations transition from sharing largely within individual teams to sharing across all departments, Puppet notes. Meanwhile, a DevOps team can share automation and deployment patterns across an enterprise. These patterns then can help an enterprise standardize its everyday operations.
A systematic approach to DevOps is ideal. This approach enables a DevOps team to quickly identify and address potential problems before they get out of hand. Best of all, it allows a DevOps team to drive meaningful improvements across all levels of an enterprise.
'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
