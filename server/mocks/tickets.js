module.exports = function(app) {
  var express = require('express');
  var _ = require('underscore');
  var ticketsRouter = express.Router();
  var ticketData = [
        {
            "id": 1,
            "creator": "Marlon Stehr",
            "description": "Tempore nesciunt consequatur iusto eos.",
            "summary": "Aut consequuntur sunt repellendus necessitatibus voluptatem.",
            "status" : "closed"
        },
        {
            "id": 2,
            "creator": "Ms. Kristopher Dickinson",
            "description": "Sit quia repudiandae dolor quo rerum.",
            "summary": "Commodi incidunt ab magni sed ea nam maxime enim."
        },
        {
            "id": 3,
            "creator": "Chance Kirlin",
            "description": "Facere nihil alias voluptas rerum quibusdam sed sapiente vero. Corrupti modi at expedita nostrum fuga.",
            "summary": "Dolorum et odit ut est sunt maxime."
        },
        {
            "id": 4,
            "creator": "Foster Lockman",
            "description": "Maxime est tenetur aut vel. Culpa rerum nulla eum est. Quibusdam praesentium a delectus nobis dolores nostrum debitis incidunt.",
            "summary": "Praesentium tempore doloribus ut tempora est sed voluptas numquam iusto."
        },
        {
            "id": 5,
            "creator": "Dr. Ruthe Kuvalis",
            "description": "Non omnis quos vel corporis voluptas. Ut molestiae ut doloremque impedit iste. Et sint repudiandae id fugit.",
            "summary": "Omnis ipsum sed aliquam minima et et.",
            "status" : "closed"
        },
        {
            "id": 6,
            "creator": "Anna Prosacco Sr.",
            "description": "Ex molestias expedita aperiam voluptate. Tempore voluptatem adipisci repudiandae qui nesciunt. Ut tempore similique sequi beatae sunt.",
            "summary": "Et ullam quo ut commodi eum."
        },
        {
            "id": 7,
            "creator": "Reilly Goyette",
            "description": "Reprehenderit corporis eligendi sed necessitatibus.",
            "summary": "Soluta sit voluptas temporibus necessitatibus magni.",
            "status" : "closed"
        },
        {
            "id": 8,
            "creator": "Jalon Dickens",
            "description": "Quos eos et tempore at. Et consequatur assumenda magnam fugiat voluptatibus sequi exercitationem. Non consequuntur deleniti et est est ipsam.",
            "summary": "Repudiandae sunt molestiae dolorum commodi ut."
        },
        {
            "id": 9,
            "creator": "Reilly Macejkovic",
            "description": "Occaecati natus dolor quis aperiam officiis reprehenderit consequatur voluptatem. Sint esse assumenda ipsa ut quia consectetur.",
            "summary": "Alias ut dolores suscipit et beatae."
        },
        {
            "id": 10,
            "creator": "Barrett Kunze",
            "description": "Quas qui dolor id id illo molestiae quis ut. Non labore voluptatem atque eum.",
            "summary": "Tempore quod quo ipsa itaque mollitia provident."
        },
        {
            "id": 11,
            "creator": "Johnathan Goyette",
            "description": "Voluptatum exercitationem accusantium aut iste maiores omnis.",
            "summary": "Dolor est saepe quas sapiente ut incidunt."
        },
        {
            "id": 12,
            "creator": "Maxine Tremblay",
            "description": "Eos alias commodi accusamus ducimus quibusdam id maxime. Et sapiente est et fuga et voluptatem sit a. Ipsum placeat in ea repellat praesentium.",
            "summary": "Et aspernatur voluptas quasi autem aut."
        },
        {
            "id": 13,
            "creator": "Sally Beier",
            "description": "Libero aliquid quod temporibus architecto minus quia.",
            "summary": "Voluptatibus non illo numquam molestias amet aut eaque voluptatem."
        },
        {
            "id": 14,
            "creator": "Lucy Ortiz",
            "description": "Ea ut illo molestias iusto hic et cupiditate.",
            "summary": "Eius libero sunt omnis vero saepe reiciendis omnis rerum laudantium.",
            "status" : "closed"
        },
        {
            "id": 15,
            "creator": "Lenora Dicki",
            "description": "Debitis dicta natus ut ex. Saepe enim odit soluta nobis.",
            "summary": "Impedit neque doloremque perferendis voluptatem quas ut quasi."
        },
        {
            "id": 16,
            "creator": "Mr. Geraldine Olson",
            "description": "Inventore quaerat qui id iure aspernatur id voluptatem.",
            "summary": "Dolorum facilis veniam aut rerum vel aperiam."
        },
        {
            "id": 17,
            "creator": "Marisa Effertz",
            "description": "Id dolore accusamus sit eaque voluptas ipsam odit. Accusantium voluptates omnis excepturi optio quisquam laborum sed ut.",
            "summary": "Porro repellat molestiae aut illum consectetur."
        },
        {
            "id": 18,
            "creator": "Enid Nitzsche",
            "description": "Qui iure aut reprehenderit est culpa est vitae tempore.",
            "summary": "Ratione ipsum corporis harum totam et aperiam illo.",
            "status" : "closed"
        },
        {
            "id": 19,
            "creator": "Billie Kessler MD",
            "description": "Possimus alias ut sed officia. Nam dolorum quod aspernatur minima et officiis voluptatem. Molestiae quasi labore quos quod.",
            "summary": "Quis natus quis soluta recusandae voluptatem ipsam rem.",
            "status" : "closed"
        },
        {
            "id": 20,
            "creator": "Sarah DuBuque",
            "description": "Et voluptas ratione animi hic illum ut nemo. Et assumenda sunt non consectetur quia saepe consequatur itaque. Et nemo consectetur ducimus odit sequi rem qui ratione.",
            "summary": "Aut rem error reprehenderit et laboriosam esse in ipsum pariatur."
        }
      ];


  ticketsRouter.get('/', function(req, res) {
    res.send({
      'tickets': ticketData
    });
  });

  ticketsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  ticketsRouter.get('/:id', function(req, res) {
    res.send({
      'tickets': _.find(ticketData, function(ticket) {
        return ticket.id == req.params.id;
      })
    });
  });

  ticketsRouter.put('/:id', function(req, res) {
    res.send({
      'tickets': {
        id: req.params.id
      }
    });
  });

  ticketsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tickets', ticketsRouter);
};
