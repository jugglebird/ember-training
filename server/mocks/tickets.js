module.exports = function(app) {
  var express = require('express');
  var _ = require('underscore');
  var ticketsRouter = express.Router();
  var ticketData = [
        {
            "id": 1,
            "creator": "Marlon Stehr",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Tempore nesciunt consequatur iusto eos.",
            "summary": "Aut consequuntur sunt repellendus necessitatibus voluptatem.",
            "status" : "closed",
            "created_at": "2015-05-10T11:18:33Z"
        },
        {
            "id": 2,
            "creator": "Ms. Kristopher Dickinson",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Sit quia repudiandae dolor quo rerum.",
            "summary": "Commodi incidunt ab magni sed ea nam maxime enim.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 3,
            "creator": "Chance Kirlin",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Facere nihil alias voluptas rerum quibusdam sed sapiente vero. Corrupti modi at expedita nostrum fuga.",
            "summary": "Dolorum et odit ut est sunt maxime.",
            "created_at": "2015-05-12:18:33-05:00"
        },
        {
            "id": 4,
            "creator": "Foster Lockman",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Maxime est tenetur aut vel. Culpa rerum nulla eum est. Quibusdam praesentium a delectus nobis dolores nostrum debitis incidunt.",
            "summary": "Praesentium tempore doloribus ut tempora est sed voluptas numquam iusto.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 5,
            "creator": "Dr. Ruthe Kuvalis",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Non omnis quos vel corporis voluptas. Ut molestiae ut doloremque impedit iste. Et sint repudiandae id fugit.",
            "summary": "Omnis ipsum sed aliquam minima et et.",
            "status" : "closed",
            "created_at": "2015-05-21:18:33-05:00"
        },
        {
            "id": 6,
            "creator": "Anna Prosacco Sr.",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Ex molestias expedita aperiam voluptate. Tempore voluptatem adipisci repudiandae qui nesciunt. Ut tempore similique sequi beatae sunt.",
            "summary": "Et ullam quo ut commodi eum.",
            "created_at": "2015-05-20T04:18:33-05:00"
        },
        {
            "id": 7,
            "creator": "Reilly Goyette",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Reprehenderit corporis eligendi sed necessitatibus.",
            "summary": "Soluta sit voluptas temporibus necessitatibus magni.",
            "status" : "closed",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 8,
            "creator": "Jalon Dickens",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Quos eos et tempore at. Et consequatur assumenda magnam fugiat voluptatibus sequi exercitationem. Non consequuntur deleniti et est est ipsam.",
            "summary": "Repudiandae sunt molestiae dolorum commodi ut.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 9,
            "creator": "Reilly Macejkovic",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Occaecati natus dolor quis aperiam officiis reprehenderit consequatur voluptatem. Sint esse assumenda ipsa ut quia consectetur.",
            "summary": "Alias ut dolores suscipit et beatae.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 10,
            "creator": "Barrett Kunze",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Quas qui dolor id id illo molestiae quis ut. Non labore voluptatem atque eum.",
            "summary": "Tempore quod quo ipsa itaque mollitia provident.",
            "created_at": "2015-05-09T14:18:33-05:00"
        },
        {
            "id": 11,
            "creator": "Johnathan Goyette",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Voluptatum exercitationem accusantium aut iste maiores omnis.",
            "summary": "Dolor est saepe quas sapiente ut incidunt.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 12,
            "creator": "Maxine Tremblay",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Eos alias commodi accusamus ducimus quibusdam id maxime. Et sapiente est et fuga et voluptatem sit a. Ipsum placeat in ea repellat praesentium.",
            "summary": "Et aspernatur voluptas quasi autem aut.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 13,
            "creator": "Sally Beier",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Libero aliquid quod temporibus architecto minus quia.",
            "summary": "Voluptatibus non illo numquam molestias amet aut eaque voluptatem.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 14,
            "creator": "Lucy Ortiz",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Ea ut illo molestias iusto hic et cupiditate.",
            "summary": "Eius libero sunt omnis vero saepe reiciendis omnis rerum laudantium.",
            "status" : "closed",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 15,
            "creator": "Lenora Dicki",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Debitis dicta natus ut ex. Saepe enim odit soluta nobis.",
            "summary": "Impedit neque doloremque perferendis voluptatem quas ut quasi.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 16,
            "creator": "Mr. Geraldine Olson",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Inventore quaerat qui id iure aspernatur id voluptatem.",
            "summary": "Dolorum facilis veniam aut rerum vel aperiam.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 17,
            "creator": "Marisa Effertz",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Id dolore accusamus sit eaque voluptas ipsam odit. Accusantium voluptates omnis excepturi optio quisquam laborum sed ut.",
            "summary": "Porro repellat molestiae aut illum consectetur.",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 18,
            "creator": "Enid Nitzsche",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Qui iure aut reprehenderit est culpa est vitae tempore.",
            "summary": "Ratione ipsum corporis harum totam et aperiam illo.",
            "status" : "closed",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 19,
            "creator": "Billie Kessler MD",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Possimus alias ut sed officia. Nam dolorum quod aspernatur minima et officiis voluptatem. Molestiae quasi labore quos quod.",
            "summary": "Quis natus quis soluta recusandae voluptatem ipsam rem.",
            "status" : "closed",
            "created_at": "2015-05-20T14:18:33-05:00"
        },
        {
            "id": 20,
            "creator": "Sarah DuBuque",
            "avatar_url": "http://robohash.org/perspiciatisplaceatfugit.png?size=300x300",
            "description": "Et voluptas ratione animi hic illum ut nemo. Et assumenda sunt non consectetur quia saepe consequatur itaque. Et nemo consectetur ducimus odit sequi rem qui ratione.",
            "summary": "Aut rem error reprehenderit et laboriosam esse in ipsum pariatur.",
            "created_at": "2015-05-20T14:18:33-05:00"
        }
      ];


  ticketsRouter.get('/', function(req, res) {
    res.send({
      'tickets': ticketData,
      'meta': {
        'all': 20,
        'open': 14,
        'closed': 6
      }
    });
  });

  ticketsRouter.post('/', function(req, res) {
    res.status(201).send({
      'tickets': req.params.ticket
    });
  });

  ticketsRouter.get('/:id', function(req, res) {
    res.send({
      'tickets': _.find(ticketData, function(ticket) {
        return ticket.id === req.params.id;
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
