'use strict';

angular.module('Base').service('Menus', [function () {
	
	this.DefaultRoles = ['*'];
	this.NavigationBar = {};

	this.ChangeMenuState = function(menuId) {
		this.ValidateMenuExistance(menuId);
		
		this.NavigationBar[menuId].Modo.Contraido = !this.NavigationBar[menuId].Modo.Contraido;
	};
	
	this.GetMenuState = function(menuId) {
		this.ValidateMenuExistance(menuId);
		
		return this.NavigationBar[menuId].Modo;
	};

	var ShouldRender = function(user) {
		if (user) {
			if (!!~this.Roles.indexOf('*')) {
				return true;
			} else {
				for (var userRoleIndex in user.Roles) {
					for (var roleIndex in this.Roles) {
						if (this.Roles[roleIndex] === user.Roles[userRoleIndex]) {
							return true;
						}
					}
				}
			}
		} else {
			return this.Publico;
		}

		return false;
	};

	this.ValidateMenuExistance = function(menuId) {
		if (menuId && menuId.length) {
			if (this.NavigationBar[menuId]) {
				return true;
			}
		} else {
			throw new Error('MenuId não identificado!');
		}

		return false;
	};

	this.GetMenu = function(menuId) {
		this.ValidateMenuExistance(menuId);

		return this.NavigationBar[menuId];
	};	

	this.AddMenu = function(menuId, publico, roles) {
		this.NavigationBar[menuId] = {
			Publico: publico || false,
			Roles: roles || this.DefaultRoles,
			Itens: [],
			ShouldRender: ShouldRender,
			Modo: {
				Contraido: false
			}
		};

		return this.NavigationBar[menuId];
	};

	this.AddMenuItem = function(menuId, titulo, link, itemClass, publico, roles, posicao) {
		if (!this.ValidateMenuExistance(menuId)) {
			this.AddMenu(menuId);
		}
		
		this.NavigationBar[menuId].Itens.push({
			Titulo: titulo,
			Link: ('/#!/' + link),
			Class: itemClass,
			uiRoute: ('/' + link),
			Publico: ((publico === null || typeof publico === 'undefined') ? this.NavigationBar[menuId].Publico : publico),
			Roles: ((roles === null || typeof roles === 'undefined') ? this.NavigationBar[menuId].Roles : roles),
			Posicao: posicao || 0,
			Itens: [],
			ShouldRender: ShouldRender
		});

		return this.NavigationBar[menuId];
	};	

}]);